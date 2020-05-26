import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyadvertsComponent } from './myadverts.component';

describe('MyadvertsComponent', () => {
  let component: MyadvertsComponent;
  let fixture: ComponentFixture<MyadvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadvertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyadvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
