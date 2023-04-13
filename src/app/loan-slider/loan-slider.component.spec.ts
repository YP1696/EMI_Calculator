import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSliderComponent } from './loan-slider.component';

describe('LoanSliderComponent', () => {
  let component: LoanSliderComponent;
  let fixture: ComponentFixture<LoanSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
