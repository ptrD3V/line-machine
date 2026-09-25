export const Icon = {
  Grid: 'grid_on',
  Schedule: 'schedule',
  Profile: 'account_circle',
  Update: 'system_update_alt',
  Reader: 'chrome_reader_mode',
  CallToAction: 'call_to_action',
  Warning: 'warning',
  Restore: 'settings_backup_restore',
  Error: 'error_outline',
} as const;

export type Icon = (typeof Icon)[keyof typeof Icon];

export const ICONS: Icon[] = Object.values(Icon);
