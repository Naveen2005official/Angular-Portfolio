import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import Typed from 'typed.js';
import { BgAnimationComponent } from '../bg-animation/bg-animation.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, BgAnimationComponent, ProfileComponent],
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
