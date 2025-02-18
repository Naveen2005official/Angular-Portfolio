import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgFor, DividerComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies1 = [
    {
      icon: 'https://img.icons8.com/?size=100&id=71256&format=png&color=FFFFFF',
      title: 'Front-End',
      description: 'Experience with Angular'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=ibmPDApkGzbG&format=png&color=FFFFFF',
      title: 'Back-End',
      description: 'Experience with .NET Core'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=AtEKkdldZfri&format=png&color=FFFFFF',
      title: 'Cloud Computing',
      description: 'Experience with AWS'
    }
  ];
  technologies2 = [
    {
      icon: 'https://img.icons8.com/?size=100&id=38294&format=png&color=FFFFFF',
      title: 'Java',
      description: 'Experience with OOPs Concepts'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=55205&format=png&color=FFFFFF',
      title: 'C#',
      description: 'Experience with OOPs Concepts'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=47736&format=png&color=FFFFFF',
      title: 'Databases',
      description: 'Experience with PostgreSQL'
    }
  ];
}
