import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAnimationComponent } from './bg-animation.component';

describe('BgAnimationComponent', () => {
  let component: BgAnimationComponent;
  let fixture: ComponentFixture<BgAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
