import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampComponent } from './bootcamp.component';

describe('BootcampComponent', () => {
  let component: BootcampComponent;
  let fixture: ComponentFixture<BootcampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootcampComponent]
    });
    fixture = TestBed.createComponent(BootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
