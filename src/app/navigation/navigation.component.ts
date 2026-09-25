import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MachineStore } from '../store/machine.store';
import { machineStateIcon } from '../utils/machine-icon';

@Component({
  selector: 'b-navigation',
  imports: [MatIcon, TitleCasePipe],
  styleUrl: './navigation.component.scss',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  protected readonly store = inject(MachineStore);
  protected readonly machines = this.store.entities;
  protected readonly stateIcon = machineStateIcon;
}
