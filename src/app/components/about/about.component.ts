import { NgFor } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, DividerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @ViewChild('carouselRef') carouselRef!: ElementRef;

  activeItem = 0;
  timeLineData = [
    { year: '2022', text: 'Started Learning Java' },
    { year: '2023', text: 'Started My Web Development Journey With Mini Projects' },
    { year: '2024', text: 'Completed My Intern At Aravind Eye Care Systems & Started My Cloud Computing Journey' },
    { year: '2025', text: 'Developed Complete Full Stack Projects & Enhancing Skills on Cloud Computing'}
  ];
  totalCarouselCount = this.timeLineData.length;

  constructor() { }

  ngOnInit(): void { }

  scroll(node: HTMLElement, left: number): void {
    node.scrollTo({ left, behavior: 'smooth' });
  }

  handleClick(event: MouseEvent, index: number): void {
    event.preventDefault();
    if (this.carouselRef.nativeElement) {
      const scrollLeft = Math.floor(this.carouselRef.nativeElement.scrollWidth * 0.7 * (index / this.timeLineData.length));
      this.scroll(this.carouselRef.nativeElement, scrollLeft);
    }
  }

  handleScroll(): void {
    if (this.carouselRef.nativeElement) {
      const index = Math.round((this.carouselRef.nativeElement.scrollLeft / (this.carouselRef.nativeElement.scrollWidth * 0.7)) * this.timeLineData.length);
      this.activeItem = index;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.carouselRef.nativeElement) {
      this.scroll(this.carouselRef.nativeElement, 0);
    }
  }
}
