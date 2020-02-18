import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PancaComponent } from './panca.component';

describe('PancaComponent', () => {
  let component: PancaComponent;
  let fixture: ComponentFixture<PancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
