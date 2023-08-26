import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrartionComponent } from './registrartion.component';

describe('RegistrartionComponent', () => {
  let component: RegistrartionComponent;
  let fixture: ComponentFixture<RegistrartionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrartionComponent]
    });
    fixture = TestBed.createComponent(RegistrartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
