import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { interval, map } from 'rxjs';
import { Icon } from '../utils/registered-icons';

@Component({
  selector: 'b-date-time',
  imports: [MatIcon, DatePipe],
  styleUrl: './date-time.component.scss',
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent {
  protected readonly Icon = Icon;
  now = toSignal(interval(1000).pipe(map(() => new Date())), { initialValue: new Date() });
}
