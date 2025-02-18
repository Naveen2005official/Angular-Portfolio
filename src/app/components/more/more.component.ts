import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [NgFor, DividerComponent],
  templateUrl: './more.component.html',
  styleUrl: './more.component.css'
})
export class MoreComponent {
  data = [
    { text: 'Member of the Programming Club of IT Department : ', text1:'Entered the Programming Club in my 2nd Year and One of the First Set Of Recruits.' },
    { text: '.NET Core Trainer : ', text1:'Trained a Group of Students of my Batch, Covered Backend Concepts Using a Powerful Framework .NET Core.' },
    { text: 'Club Events Volunteer & Problem Solving Lecturer for Club Juniors : ', text1:'As a Part of the Programming Club of IT Department.' },
    { text: 'Best Student of 10th : ', text1:'Awarded as the Best Student of 10th in my School for Scoring Top Marks on Term & Half Yearly Exams.' }
  ];
}
