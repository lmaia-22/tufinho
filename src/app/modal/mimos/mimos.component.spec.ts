import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimosComponent } from './mimos.component';

describe('MimosComponent', () => {
  let component: MimosComponent;
  let fixture: ComponentFixture<MimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
