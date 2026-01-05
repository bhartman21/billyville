import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';

type ActiveRoute = 'home' | 'professional' | 'projects' | 'community' | 'about';

interface NavLink {
  label: string;
  href: string;
  route: ActiveRoute;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  activeRoute = input<ActiveRoute>('home');
  showSocialLinks = input<boolean>(false);
  mobileMenuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Home', href: '#/', route: 'home' },
    { label: 'Professional', href: '#/professional', route: 'professional' },
    { label: 'Projects', href: '#/projects', route: 'projects' },
    { label: 'Community', href: '#/community', route: 'community' },
    { label: 'About', href: '#/about', route: 'about' }
  ];

  isActive(route: ActiveRoute): boolean {
    return this.activeRoute() === route;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
