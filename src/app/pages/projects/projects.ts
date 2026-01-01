import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation';

export type ProjectCategory = 'personal' | 'work' | 'open-source' | 'learning';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'VA Benefits Dashboard',
      description: 'Chrome extension to view VA disability ratings, diagnostic codes, and static status for Veterans.',
      category: 'personal',
      status: 'completed',
      technologies: ['TypeScript', 'Chrome Extension', 'HTML', 'CSS'],
      github: 'https://github.com/bhartman21/VA_Benefits_Dashboard'
    },
    {
      title: 'Agent Builder',
      description: 'Claude Agent builder containing a development team of 12 AI agents for collaborative software development.',
      category: 'personal',
      status: 'in-progress',
      technologies: ['AI', 'Claude', 'Agents'],
      github: 'https://github.com/bhartman21/agent-builder'
    },
    {
      title: 'VA Disability Formatter',
      description: 'Utility to clean up and format VA Disability JSON data into a readable, presentable format.',
      category: 'personal',
      status: 'completed',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/bhartman21/VA_Disability_Formatter'
    },
    {
      title: 'Letter Redactor',
      description: 'Tool for redacting sensitive information from letters and documents.',
      category: 'personal',
      status: 'completed',
      technologies: ['JavaScript'],
      github: 'https://github.com/bhartman21/LetterRedactor'
    },
    {
      title: 'BillyVille Personal Website',
      description: 'This personal portfolio website built with Angular and Tailwind CSS featuring multiple themes and responsive design.',
      category: 'personal',
      status: 'in-progress',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
      github: 'https://github.com/bhartman21'
    },
    {
      title: 'LangChain Learning',
      description: 'Learning projects and experiments with LangChain for building AI-powered applications.',
      category: 'learning',
      status: 'in-progress',
      technologies: ['Python', 'LangChain', 'AI'],
      github: 'https://github.com/bhartman21/LangChain-Learn'
    },
    {
      title: 'GitHub Actions',
      description: 'Collection of GitHub Actions workflows and automation scripts.',
      category: 'learning',
      status: 'in-progress',
      technologies: ['GitHub Actions', 'CI/CD', 'Automation'],
      github: 'https://github.com/bhartman21/GitHub_Actions'
    }
  ];

  categories: { value: ProjectCategory; label: string; icon: string }[] = [
    { value: 'personal', label: 'Personal', icon: 'fas fa-home' },
    { value: 'work', label: 'Work', icon: 'fas fa-briefcase' },
    { value: 'open-source', label: 'Open Source', icon: 'fas fa-code' },
    { value: 'learning', label: 'Learning', icon: 'fas fa-book' }
  ];

  selectedCategory: ProjectCategory | 'all' = 'all';

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: ProjectCategory | 'all'): void {
    this.selectedCategory = category;
  }

  getStatusClass(status: ProjectStatus): string {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'in-progress':
        return 'bg-usmc-gold/20 text-usmc-gold';
      case 'planned':
        return 'bg-gray-500/20 text-gray-400';
    }
  }

  getStatusLabel(status: ProjectStatus): string {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
    }
  }

  getCategoryIcon(category: ProjectCategory): string {
    return this.categories.find(c => c.value === category)?.icon || '';
  }
}
