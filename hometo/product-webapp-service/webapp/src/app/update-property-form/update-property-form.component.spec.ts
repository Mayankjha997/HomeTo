import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePropertyFormComponent } from './update-property-form.component';

describe('UpdatePropertyFormComponent', () => {
  let component: UpdatePropertyFormComponent;
  let fixture: ComponentFixture<UpdatePropertyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePropertyFormComponent]
    });
    fixture = TestBed.createComponent(UpdatePropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
