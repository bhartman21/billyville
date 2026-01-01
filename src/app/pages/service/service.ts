import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation';
import { ContactModalComponent } from '../../components/contact-modal/contact-modal';

export interface OrgHighlight {
  text: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, NavigationComponent, ContactModalComponent],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class ServiceComponent {
  showContactModal = false;

  openContactModal() {
    this.showContactModal = true;
  }

  closeContactModal() {
    this.showContactModal = false;
  }
  // Marine Corps League
  mcl = {
    name: 'Marine Corps League',
    role: 'Member',
    chapter: '',
    startYear: '2015',
    description: 'The Marine Corps League is a veterans organization for Marines and FMF Corpsmen/Chaplains who have served honorably. We support fellow Marines and their families through community service, advocacy, and camaraderie.',
    link: 'https://www.mclnational.org',
    highlights: [
      'Veteran outreach and support programs',
      'Community service events',
      'Memorial and honor guard services',
      'Youth programs and scholarships'
    ]
  };

  // Military Order of Devil Dogs
  modd = {
    name: 'Military Order of Devil Dogs',
    role: 'Pup',
    pound: 'Dixon Pound # 079',
    startYear: '2016',
    description: 'The "Fun and Honor Society" of the Marine Corps League. The Military Order of Devil Dogs focuses on having fun while raising funds for charitable purposes, particularly supporting children\'s hospitals and other youth-focused charities.',
    link: 'https://www.mofrg.org',
    highlights: [
      'Fundraising for children\'s charities',
      'Supporting youth programs',
      'Promoting camaraderie among Marines',
      'Community outreach events'
    ]
  };

  // CoderDojo
  coderDojo = {
    name: 'CoderDojo',
    role: 'Volunteer Mentor',
    location: '',
    startYear: '2016',
    description: 'CoderDojo is a global movement of free, volunteer-led, community-based programming clubs for young people. I mentor children and teens interested in learning to code, helping them build confidence and skills in technology.',
    link: 'https://coderdojo.com',
    highlights: [
      'Teaching coding fundamentals to youth ages 7-17',
      'Web development and game design workshops',
      'Inspiring the next generation of developers',
      'Creating a fun, inclusive learning environment'
    ]
  };

}
