import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPropertiesPageComponent } from './all-properties-page.component';

describe('AllPropertiesPageComponent', () => {
  let component: AllPropertiesPageComponent;
  let fixture: ComponentFixture<AllPropertiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPropertiesPageComponent]
    });
    fixture = TestBed.createComponent(AllPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
