import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation';

interface Job {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

interface Education {
  school: string;
  degree: string;
  field?: string;
  startYear: string;
  endYear: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './professional.html',
  styleUrl: './professional.scss'
})
export class ProfessionalComponent {
  jobs: Job[] = [
    {
      title: 'Software Developer',
      company: 'Identifi Inc.',
      location: 'Florida',
      startDate: 'July 2012',
      endDate: 'Present',
      description: 'Developing software solutions for identity verification and security.',
      highlights: []
    }, 
    {
      title: 'Senior Software Engineer',
      company: 'ProScript',
      location: 'Clearwater, FL',
      startDate: 'June 2010',
      endDate: 'July 2012',
      description: 'Did lots of cool stuff working on web applications, phone systems, and internal tools.',
      highlights: ['Used voice to text tools', 'Set up VOIP lines to connect to our transcription servers']
    }, 
    {
      title: 'Web Developer',
      company: 'WestPoint Underwriters',
      location: 'Pinellas Park, FL',
      startDate: 'May 2005',
      endDate: 'June 2010',
      description: 'Built and maintained websites for multiple Insurance companies and internal applications.',
      highlights: ['Improved the way we brought new clients onboard', 'Improved site performance', 'Led team of extremely talented developers']
    }
    // Add more jobs here
  ];

  education: Education[] = [
    {
      school: 'University of Phoenix',
      degree: 'Degree',
      field: '',
      startYear: '2002',
      endYear: '2007'
    }
    // Add more education here
  ];

  certifications: Certification[] = [
    {
      name: 'Docker & VS Code MasterClass',
      issuer: 'Udemy',
      date: 'Mar 2025'
    },
    {
      name: 'Build Chat Applications with OpenAI and LangChain',
      issuer: 'Udemy',
      date: 'Feb 2025'
    },
    {
      name: 'How to Become a Senior Developer - Beyond Coding Skills',
      issuer: 'Udemy',
      date: 'Feb 2025'
    },
    {
      name: 'Generative AI for NodeJs: OpenAI, LangChain - TypeScript',
      issuer: 'Udemy',
      date: 'Jan 2025'
    },
    {
      name: 'AI For Developers with GitHub Copilot, Cursor AI & ChatGPT',
      issuer: 'Udemy',
      date: 'Dec 2024'
    }
    // Add more certifications here
  ];

  skills: string[] = [
    'TypeScript',
    'Angular',
    'Node.js',
    'Docker',
    'AI/ML Integration',
    'SQL',
    'DevOps',
    'Scrum'
  ];
}
