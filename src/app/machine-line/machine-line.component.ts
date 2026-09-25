import { Component, inject } from '@angular/core';
import { MachineStore } from '../store/machine.store';
import { MachineBlockComponent } from './machine-block/machine-block.component';

@Component({
  selector: 'b-machine-line',
  imports: [MachineBlockComponent],
  styleUrl: './machine-line.component.scss',
  templateUrl: './machine-line.component.html',
})
export class MachineLineComponent {
  protected readonly store = inject(MachineStore);
  protected readonly machines = this.store.entities;
}
