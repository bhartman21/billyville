import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'scarlet' | 'gold';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'billyville-theme';

  currentTheme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply theme whenever it changes
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme;
    if (stored && ['light', 'dark', 'scarlet', 'gold'].includes(stored)) {
      return stored;
    }
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-scarlet', 'theme-gold', 'dark');

    // Add the new theme class
    root.classList.add(`theme-${theme}`);

    // Add 'dark' class for Tailwind dark mode (for dark, scarlet, and gold themes)
    if (theme !== 'light') {
      root.classList.add('dark');
    }

    // Save to localStorage
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  cycleTheme(): void {
    const themes: Theme[] = ['light', 'dark', 'scarlet', 'gold'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }
}
