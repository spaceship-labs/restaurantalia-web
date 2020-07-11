import { writable } from 'svelte/store';

function createTheme() {
  const { subscribe, set, update } = writable({
    color: 'red',
  });
  return {
    subscribe,
    setTheme: (options) => set(options),
    updateTheme: (options) => update(n => options),
  };
}

export const theme = createTheme();
