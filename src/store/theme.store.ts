import { writable } from 'svelte/store';

export enum ThemeMode {
	Light = 'light',
	Dark = 'dark'
}

interface IThemeStore {
	mode: ThemeMode;
}

export const themeStore = writable<IThemeStore>({
	mode: ThemeMode.Light
});
