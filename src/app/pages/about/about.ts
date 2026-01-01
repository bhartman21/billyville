import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {

}
