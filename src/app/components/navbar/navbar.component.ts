import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `<nav class="navbar">  
  <div class="nav-center">
    <a href="#" class="nav-link">Projects</a>
    <a href="#" class="nav-link">Technologies</a>
    <a href="#" class="nav-link">Certifications</a>
    <a href="#" class="nav-link">Experiences</a>
    <a href="#" class="nav-link">Skills</a>
    <a href="#" class="nav-link">About</a>
  </div>

  <div class="nav-right">
    <a href="https://github.com/Naveen2005official" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF" alt="GitHub" class="icon" />
    </a>
    <a href="www.linkedin.com/in/naveenkumar7105" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn" class="icon" />
    </a>
    <a href="https://www.instagram.com/naveenkumaroffic?igsh=eXd4YzR2Z2lva2V1" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" alt="Instagram" class="icon" />
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
