import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgFor],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications = [
    {
      image: '../../images/aws.png',
      title: 'AWS Certified Cloud Practitioner CLF-CO2',
      source: 'https://www.credly.com/badges/fa5822f6-c0ab-485f-95e8-33418f181f88/linked_in_profile'
    },
    {
      image: '../../images/java.png',
      title: 'Core Java - Coursera (LearnQuest)',
      source: 'https://www.coursera.org/account/accomplishments/specialization/09WOY0K65L73'
    }
  ];
}
