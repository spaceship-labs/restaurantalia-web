import { writable } from 'svelte/store';

export const theme = writable({
  color: 'red',
});

export const updateTheme = (options) => theme.update(options);