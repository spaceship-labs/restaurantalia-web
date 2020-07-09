import { writable } from 'svelte/store';

export const themeStore = writable({
  color: 'red',
});

export const updateTheme = (options) => themeStore.update(() => options);

let theme = {};
themeStore.subscribe(value => {
  theme = value;
});

export { theme }