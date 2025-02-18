import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `<nav class="navbar">  
  <div class="nav-center">
    <a href="#projects" class="nav-link">Projects</a>
    <a href="#technologies" class="nav-link">Technologies</a>
    <a href="#certifications" class="nav-link">Certifications</a>
    <a href="#experiences" class="nav-link">Experiences</a>
    <a href="#skills" class="nav-link">Skills</a>
    <a href="#about" class="nav-link">About</a>
  </div>

  <div class="nav-right">
    <a class="socio" href="https://github.com/Naveen2005official" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF" alt="GitHub" class="icon" />
    </a>
    <a class="socio" href="www.linkedin.com/in/naveenkumar7105" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn" class="icon" />
    </a>
    <a class="socio" href="https://www.instagram.com/naveenkumaroffic?igsh=eXd4YzR2Z2lva2V1" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" alt="Instagram" class="icon" />
    </a>
    <a class="socio" href="https://leetcode.com/u/Naveen_Kumar_S_07/" target="_blank">
      <img src="https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=FFFFFF" alt="LeetCode" class="icon" />
    </a>
  </div>
</nav>
`,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
