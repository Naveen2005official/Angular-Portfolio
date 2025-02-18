import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor,DividerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      image: 'path/to/image1.jpg',
      title: 'Heppo',
      description: 'Heppo is a modern friend-finding platform built with Angular, .NET Core, and PostgreSQL, enabling users to connect through real-time messaging, likes, and intelligent matching. With online and offline functionality, authentication, and authorization, it ensures a secure and seamless experience. The platform offers a stunning UI, smooth interactions, and an intuitive user experience, making it easy to discover and connect with like-minded people while fostering meaningful relationships.',
      tags: ['Angular', '.NET Core', 'PostgreSQL', 'SignalR'],
      source: 'https://github.com/Naveen2005official/Heppo'
    },
    {
      image: 'path/to/image1.jpg',
      title: 'Intelligent Organ Transplantation System',
      description: 'Intelligent Organ Transplantation is a cutting-edge system built using Angular, .NET Core, Python, and PostgreSQL. It leverages a machine learning model to accurately match donors and recipients based on medical compatibility. The system enhances efficiency, enabling faster decision-making to save lives and improve healthcare services.',
      tags: ['Angular', '.NET Core', 'Python', 'PostgreSQL', 'openAPI Integration'],
      source: 'https://github.com/Naveen2005official/Organ-Transplantation-System'
    },
    {
      image: 'path/to/image1.jpg',
      title: 'Marquix',
      description: 'Marquix is a comprehensive mark management system built using Angular, .NET Core, and PostgreSQL. It features dedicated logins for students and staff, providing secure access through authentication and authorization. The platform offers a user-friendly interface for efficient entry, tracking, and analysis of academic performance. With its intuitive design and robust functionality.',
      tags: ['Angular', '.NET Core', 'PostgreSQL'],
      source: 'https://github.com/Naveen2005official/Marquix'
    },
    {
      image: 'path/to/image1.jpg',
      title: 'Taxi Booking System',
      description: 'The Taxi Booking System is a robust application developed using Java and Object-Oriented Programming (OOP) principles. It streamlines the process of booking, managing, and tracking taxis efficiently. The system supports user-friendly features like ride scheduling, real-time fare calculation, and trip status updates. With OOP concepts like encapsulation, inheritance, and polymorphism.',
      tags: ['Java'],
      source: 'https://github.com/Naveen2005official/Taxi-Booking-System'
    }
  ];
}
