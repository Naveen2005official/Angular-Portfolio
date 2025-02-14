import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies = [
    {
      icon: 'https://img.icons8.com/?size=100&id=71256&format=png&color=FFFFFF',
      title: 'Front-End',
      description: 'Experience with Angular'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=47736&format=png&color=FFFFFF',
      title: 'Back-End',
      description: 'Experience with .NET Core and Databases'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=AtEKkdldZfri&format=png&color=FFFFFF',
      title: 'Cloud Computing',
      description: 'Experience with AWS'
    }
  ];
}
