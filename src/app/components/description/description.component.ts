import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import Typed from 'typed.js';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements AfterViewInit {
  @ViewChild('typedText', { static: false }) typedText!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Developer', 'Cloud Engineer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };

      new Typed(this.typedText.nativeElement, options);
    }
  }
}
