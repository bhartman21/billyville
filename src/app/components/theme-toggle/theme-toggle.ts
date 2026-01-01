import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss'
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  themeOptions: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: 'fas fa-sun' },
    { value: 'dark', label: 'Dark', icon: 'fas fa-moon' },
    { value: 'scarlet', label: 'Scarlet', icon: 'fas fa-fire' },
    { value: 'gold', label: 'Gold', icon: 'fas fa-star' },
  ];
}
