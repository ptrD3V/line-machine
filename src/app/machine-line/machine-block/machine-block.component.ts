import { TitleCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { machineStateIcon, machineTypeIcon } from '../../utils/machine-icon';
import { MachineState, MachineType } from '../../models/machine.model';

@Component({
  selector: 'b-machine-block',
  imports: [MatIcon, TitleCasePipe],
  styleUrl: './machine-block.component.scss',
  templateUrl: './machine-block.component.html',
  host: { '[class]': '"state-" + state()', '[attr.title]': 'message()' },
})
export class MachineBlockComponent {
  readonly type = input.required<MachineType>();
  readonly state = input.required<MachineState>();
  readonly message = input<string | null>(null);

  protected readonly typeIcon = computed(() => machineTypeIcon(this.type()));
  protected readonly stateIcon = computed(() => machineStateIcon(this.state()));
}
