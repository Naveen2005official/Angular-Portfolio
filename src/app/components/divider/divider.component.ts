import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {
  colorAlt: boolean = true; // Change this dynamically as needed

  get dividerGradient(): string {
    return this.colorAlt 
      ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' 
      : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';
  }
}
