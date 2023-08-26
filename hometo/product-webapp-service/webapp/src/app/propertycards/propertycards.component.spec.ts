import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertycardsComponent } from './propertycards.component';

describe('PropertycardsComponent', () => {
  let component: PropertycardsComponent;
  let fixture: ComponentFixture<PropertycardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertycardsComponent]
    });
    fixture = TestBed.createComponent(PropertycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
