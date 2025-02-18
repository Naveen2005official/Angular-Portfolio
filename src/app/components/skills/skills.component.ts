import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, DividerComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skill1 = [
    {
      icon: 'https://img.icons8.com/?size=100&id=xYlFNxNeJAzA&format=png&color=FFFFFF',
      title: 'Problem Solving',
      description: 'Strong Foundation in Java, Solved 300+ Problems in the Platforms such as LeetCode and GeeksForGeeks.'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=gQNhirAtrNg1&format=png&color=FFFFFF',
      title: 'Team Work',
      description: 'Worked as a Team during my Intern Period at Aravind Eye Care Systems.'
    }
  ];
  skill2 = [
    {
      icon: 'https://img.icons8.com/?size=100&id=By9dV3gjDdCF&format=png&color=FFFFFF',
      title: 'Leadership',
      description: 'Guided my team in competing in two hackathons.'
    },
    {
      icon: 'https://img.icons8.com/?size=100&id=tMC4YuymcQG1&format=png&color=FFFFFF',
      title: 'Communication',
      description: 'Fluent with English and Tamil.'
    }
  ];
}
