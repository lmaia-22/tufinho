import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudadesComponent } from './saudades.component';

describe('SaudadesComponent', () => {
  let component: SaudadesComponent;
  let fixture: ComponentFixture<SaudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
