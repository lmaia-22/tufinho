import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupidoComponent } from './cupido.component';

describe('CupidoComponent', () => {
  let component: CupidoComponent;
  let fixture: ComponentFixture<CupidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
