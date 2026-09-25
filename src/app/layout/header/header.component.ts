import { Component } from '@angular/core';
import { DateTimeComponent } from '../../date-time/date-time.component';
import { ProfileComponent } from '../../profile/profile.component';

@Component({
  selector: 'b-header',
  imports: [DateTimeComponent, ProfileComponent],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
