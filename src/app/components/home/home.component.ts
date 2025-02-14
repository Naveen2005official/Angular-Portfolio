import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BgAnimationComponent } from '../bg-animation/bg-animation.component';
import { DescriptionComponent } from '../description/description.component';
import { DividerComponent } from '../divider/divider.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ExperiencesComponent } from '../experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BgAnimationComponent, DescriptionComponent, DividerComponent, ProjectsComponent, TechnologiesComponent, CertificationsComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
