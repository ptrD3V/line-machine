import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Icon } from '../utils/registered-icons';

@Component({
  selector: 'b-profile',
  styleUrl: './profile.component.scss',
  templateUrl: './profile.component.html',
  imports: [MatIcon],
})
export class ProfileComponent {
  protected readonly Icon = Icon;
  userRole = signal('Operator');
}
