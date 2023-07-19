import { writable, derived } from 'svelte/store';
import { sample } from './funnelDefs';

const count = writable(0);
const pick = writable('bada55');
const values = writable([...sample]);

const actions = {
  refresh: () => {
    count.update(n => n + 1);
    values.set(sample.map(() => Math.floor(Math.random() * 100)));
  },
  reset: () => {
    count.set(0);
    values.set([...sample]);
  },
  updatePick: key => {
    pick.set(key);
  },
};

export { count, pick, values, actions };
