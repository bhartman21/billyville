import { Component } from '@angular/core';
import { CardColor, FeatureCardComponent } from '../../components/feature-card/feature-card';
import { NavigationComponent } from '../../components/navigation/navigation';

interface FeatureCard {
  title: string;
  description: string;
  link: string;
  color: CardColor;
  icon: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6;  // Number of columns to span (out of 6). Default: 1
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeatureCardComponent, NavigationComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  featureCards: FeatureCard[] = [
    {
      title: 'Professional',
      description: 'Career history, resume, skills, and professional accomplishments.',
      link: '#/professional',
      color: 'scarlet',
      icon: 'resume',
      span: 2  
    },
    {
      title: 'Projects',
      description: 'Personal software projects and open source contributions.',
      link: '#/projects',
      color: 'gold',
      icon: 'portfolio',
      span: 2
    },
    {
      title: 'Community',
      description: 'Volunteer work with Marine Corps League, MODD, CoderDojo, and more.',
      link: '#/community',
      color: 'scarlet',
      icon: 'community',
      span: 2
    },
    {
      title: 'About',
      description: 'Get to know me - my story, interests, and what drives me.',
      link: '#/about',
      color: 'gold',
      icon: 'about',
      span: 6
    }
  ];
}
