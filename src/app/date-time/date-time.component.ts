import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { map, timer } from 'rxjs';
import { Icon } from '../utils/registered-icons';

const MINUTE_MS = 60_000;

@Component({
  selector: 'b-date-time',
  imports: [MatIcon, DatePipe],
  styleUrl: './date-time.component.scss',
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent {
  protected readonly Icon = Icon;
  now = toSignal(
    timer(MINUTE_MS - (Date.now() % MINUTE_MS), MINUTE_MS).pipe(map(() => new Date())),
    { initialValue: new Date() },
  );
}
