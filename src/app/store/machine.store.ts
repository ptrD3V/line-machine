import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  catchError,
  EMPTY,
  exhaustMap,
  finalize,
  merge,
  pipe,
  Subject,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { Machine } from '../models/machine.model';
import { MachinesApiService } from '../services/machines-api.service';

const POLL_INTERVAL_MS = 5000;

type MachineStoreState = {
  loading: boolean;
  loaded: boolean;
  error: string | null;
};

export const MachineStore = signalStore(
  { providedIn: 'root' },
  withEntities<Machine>(),
  withState<MachineStoreState>({ loading: false, loaded: false, error: null }),
  withMethods((store, api = inject(MachinesApiService)) => {
    const refresh$ = new Subject<void>();
    const isSame = (a: Machine[], b: Machine[]) => JSON.stringify(a) === JSON.stringify(b);

    return {
      refresh(): void {
        refresh$.next();
      },

      startPolling: rxMethod<number>(
        pipe(
          switchMap((ms) => merge(timer(0, ms), refresh$)),
          // exhaustMap drops ticks while a request is in flight, so state is only touched for real requests
          exhaustMap(() => {
            patchState(store, { loading: true });
            return api.getMachines().pipe(
              tap((machines) => {
                // skip write when data is unchanged
                if (!isSame(machines, store.entities())) {
                  patchState(store, setAllEntities(machines));
                }
                patchState(store, { loaded: true, error: null });
              }),
              catchError((e: Error) => {
                patchState(store, { error: e.message });
                return EMPTY;
              }),
              finalize(() => patchState(store, { loading: false })),
            );
          }),
        ),
      ),
    };
  }),
  withHooks({
    onInit(store) {
      store.startPolling(POLL_INTERVAL_MS);
    },
  }),
);
