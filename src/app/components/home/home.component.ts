import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BgAnimationComponent } from '../bg-animation/bg-animation.component';
import { DescriptionComponent } from '../description/description.component';
import { DividerComponent } from '../divider/divider.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BgAnimationComponent, DescriptionComponent, DividerComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
