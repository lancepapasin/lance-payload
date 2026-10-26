import * as migration_20261026_050024_initial from './20261026_050024_initial';

export const migrations = [
  {
    up: migration_20261026_050024_initial.up,
    down: migration_20261026_050024_initial.down,
    name: '20261026_050024_initial'
  },
];
