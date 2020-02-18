import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstupidezComponent } from './estupidez.component';

describe('EstupidezComponent', () => {
  let component: EstupidezComponent;
  let fixture: ComponentFixture<EstupidezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstupidezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstupidezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
