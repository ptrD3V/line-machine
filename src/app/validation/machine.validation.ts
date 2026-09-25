import { Machine, MachineState, MachineType } from '../models/machine.model';

export const MACHINE_TYPES: readonly MachineType[] = ['scale', 'packer', 'attacher', 'closer'];
export const MACHINE_STATES: readonly MachineState[] = ['running', 'idle', 'error'];

export function isMachine(value: unknown): value is Machine {
  if (typeof value !== 'object' || value === null) return false;
  const m = value as Record<string, unknown>;
  return (
    typeof m['id'] === 'string' &&
    MACHINE_TYPES.includes(m['type'] as MachineType) &&
    MACHINE_STATES.includes(m['state'] as MachineState) &&
    (m['message'] === null || typeof m['message'] === 'string')
  );
}

export function assertMachines(value: unknown): Machine[] {
  if (!Array.isArray(value)) {
    throw new Error('Invalid machines response: expected an array');
  }
  const index = value.findIndex((item) => !isMachine(item));
  if (index !== -1) {
    throw new Error(`Invalid machines response: item at index ${index} is not a valid Machine`);
  }
  return value as Machine[];
}
