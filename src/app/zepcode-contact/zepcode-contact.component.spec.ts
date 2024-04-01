import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZepcodeContactComponent } from './zepcode-contact.component';

describe('ZepcodeContactComponent', () => {
  let component: ZepcodeContactComponent;
  let fixture: ComponentFixture<ZepcodeContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZepcodeContactComponent]
    });
    fixture = TestBed.createComponent(ZepcodeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
