import { StorageAdapter } from './types';

export const local: StorageAdapter = {
  get<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch {
      console.error('Failed to get item from localStorage');
      return null;
    }
  },
  set<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error('Failed to set item to localStorage');
    }
  },
  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch {
      console.error('Failed to remove item from localStorage');
    }
  },
  clear() {
    try {
      localStorage.clear();
    } catch {
      console.error('Failed to clear localStorage');
    }
  },
};
