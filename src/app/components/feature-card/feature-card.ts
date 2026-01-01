import { CommonModule } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';

export type CardColor = 'scarlet' | 'gold';
export type CardSpan = 1 | 2 | 3 | 4 | 5 | 6;

export interface CardConfig {
  title: string;
  description: string;
  link: string;
  color: CardColor;
  icon: 'portfolio' | 'resume' | 'community' | 'custom';
  customIconPath?: string;
  span?: CardSpan;
}

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  link = input.required<string>();
  color = input<CardColor>('scarlet');
  icon = input<string>('portfolio');
  customIconPath = input<string>('');
  span = input<CardSpan>(2);

  @HostBinding('class')
  get hostClass(): string {
    const spanClasses: Record<CardSpan, string> = {
      1: 'col-span-6 sm:col-span-3 lg:col-span-1',
      2: 'col-span-6 sm:col-span-3 lg:col-span-2',
      3: 'col-span-6 sm:col-span-6 lg:col-span-3',
      4: 'col-span-6 sm:col-span-6 lg:col-span-4',
      5: 'col-span-6 sm:col-span-6 lg:col-span-5',
      6: 'col-span-6'
    };
    return spanClasses[this.span()];
  }

  get borderColorClass(): string {
    return this.color() === 'gold' ? 'border-usmc-gold' : 'border-usmc-scarlet';
  }

  get iconBgClass(): string {
    return this.color() === 'gold' ? 'bg-usmc-gold/10' : 'bg-usmc-scarlet/10';
  }

  get iconBgHoverClass(): string {
    return this.color() === 'gold' ? 'group-hover:bg-usmc-gold' : 'group-hover:bg-usmc-scarlet';
  }

  get iconColorClass(): string {
    return this.color() === 'gold' ? 'text-usmc-gold-dark' : 'text-usmc-scarlet';
  }

  get iconHoverColorClass(): string {
    return this.color() === 'gold' ? 'group-hover:text-usmc-black' : 'group-hover:text-white';
  }

  get iconClass(): string {
    const icons: Record<string, string> = {
      portfolio: 'fas fa-folder-open',
      resume: 'fas fa-file-alt',
      community: 'fas fa-users',
      about: 'fas fa-user-circle'
    };

    if (this.customIconPath()) {
      return this.customIconPath();
    }
    return icons[this.icon()] || icons['portfolio'];
  }
}
