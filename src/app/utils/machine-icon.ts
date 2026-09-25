import { MachineState, MachineType } from '../models/machine.model';
import { Icon } from './registered-icons';

const MACHINE_TYPE_ICON: Record<MachineType, Icon> = {
  scale: Icon.Update,
  packer: Icon.CallToAction,
  attacher: Icon.Reader,
  closer: Icon.Grid,
};

export function machineTypeIcon(type: MachineType): Icon {
  return MACHINE_TYPE_ICON[type];
}

// running -> restore icon, error -> red, idle -> orange warning
const MACHINE_STATE_ICON: Record<MachineState, Icon> = {
  running: Icon.Restore,
  error: Icon.Error,
  idle: Icon.Warning,
};

export function machineStateIcon(state: MachineState): Icon {
  return MACHINE_STATE_ICON[state];
}
