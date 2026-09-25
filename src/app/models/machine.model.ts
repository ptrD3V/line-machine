export type MachineType = 'scale' | 'packer' | 'attacher' | 'closer';
export type MachineState = 'running' | 'idle' | 'error';

export interface Machine {
  id: string;
  type: MachineType;
  state: MachineState;
  message: string | null;
}
