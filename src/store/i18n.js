import { writable } from 'svelte/store';

export const DEFAULT_LANG = 'en';
export const i18nLang = writable(DEFAULT_LANG);