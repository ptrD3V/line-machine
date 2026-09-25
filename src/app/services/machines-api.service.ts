import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Machine } from '../models/machine.model';
import { assertMachines } from '../validation/machine.validation';

@Injectable({ providedIn: 'root' })
export class MachinesApiService {
  private readonly http = inject(HttpClient);

  getMachines(): Observable<Machine[]> {
    return this.http.get<unknown>('mocks/machines.json').pipe(map(assertMachines));
  }
}
