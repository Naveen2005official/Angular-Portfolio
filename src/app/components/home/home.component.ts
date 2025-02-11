import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BgAnimationComponent } from '../bg-animation/bg-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BgAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
