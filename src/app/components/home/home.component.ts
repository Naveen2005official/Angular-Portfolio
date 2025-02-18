import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BgAnimationComponent } from '../bg-animation/bg-animation.component';
import { DescriptionComponent } from '../description/description.component';
import { DividerComponent } from '../divider/divider.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { MoreComponent } from '../more/more.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, DescriptionComponent, ProjectsComponent, TechnologiesComponent, CertificationsComponent, ExperiencesComponent, SkillsComponent, AboutComponent, MoreComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
