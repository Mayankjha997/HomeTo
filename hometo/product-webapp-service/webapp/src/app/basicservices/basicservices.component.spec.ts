import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicservicesComponent } from './basicservices.component';

describe('BasicservicesComponent', () => {
  let component: BasicservicesComponent;
  let fixture: ComponentFixture<BasicservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicservicesComponent]
    });
    fixture = TestBed.createComponent(BasicservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
