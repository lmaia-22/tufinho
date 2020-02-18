import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikitaComponent } from './nikita.component';

describe('NikitaComponent', () => {
  let component: NikitaComponent;
  let fixture: ComponentFixture<NikitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
