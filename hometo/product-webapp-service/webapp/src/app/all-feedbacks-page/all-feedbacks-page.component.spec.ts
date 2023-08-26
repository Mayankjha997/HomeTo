import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeedbacksPageComponent } from './all-feedbacks-page.component';

describe('AllFeedbacksPageComponent', () => {
  let component: AllFeedbacksPageComponent;
  let fixture: ComponentFixture<AllFeedbacksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFeedbacksPageComponent]
    });
    fixture = TestBed.createComponent(AllFeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
