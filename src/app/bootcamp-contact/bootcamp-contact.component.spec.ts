import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampContactComponent } from './bootcamp-contact.component';

describe('BootcampContactComponent', () => {
  let component: BootcampContactComponent;
  let fixture: ComponentFixture<BootcampContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootcampContactComponent]
    });
    fixture = TestBed.createComponent(BootcampContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
