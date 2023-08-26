import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCategoryPageComponent } from './property-category-page.component';

describe('PropertyCategoryPageComponent', () => {
  let component: PropertyCategoryPageComponent;
  let fixture: ComponentFixture<PropertyCategoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyCategoryPageComponent]
    });
    fixture = TestBed.createComponent(PropertyCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
