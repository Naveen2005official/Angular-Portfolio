import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BgAnimationComponent } from './components/bg-animation/bg-animation.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Portfolio';
}
