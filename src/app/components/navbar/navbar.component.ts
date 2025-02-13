import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `<nav class="navbar">
  <div class="nav-left">
    <img src="https://img.icons8.com/?size=100&id=Myz5ZZ4p8yRq&format=png&color=000000" alt="Logo" class="logo" />
    <span class="brand-name">Navi</span>
  </div>
  
  <div class="nav-center">
    <a href="#" class="nav-link">Projects</a>
    <a href="#" class="nav-link">Technologies</a>
    <a href="#" class="nav-link">Certifications</a>
    <a href="#" class="nav-link">Experiences</a>
    <a href="#" class="nav-link">About</a>
  </div>

  <div class="nav-right">
    <a href="https://github.com/Naveen2005official" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF" alt="GitHub" class="icon" />
    </a>
    <a href="https://www.linkedin.com/in/naveen-kumar-senthil-murugan-b0730825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn" class="icon" />
    </a>
    <a href="https://leetcode.com/u/Naveen_Kumar_S_07/" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=FFFFFF" alt="LeetCode" class="icon" />
    </a>
  </div>
</nav>
`,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
