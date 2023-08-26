import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbookingPageComponent } from './allbooking-page.component';

describe('AllbookingPageComponent', () => {
  let component: AllbookingPageComponent;
  let fixture: ComponentFixture<AllbookingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllbookingPageComponent]
    });
    fixture = TestBed.createComponent(AllbookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
