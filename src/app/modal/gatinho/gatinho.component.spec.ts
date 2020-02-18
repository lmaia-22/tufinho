import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatinhoComponent } from './gatinho.component';

describe('GatinhoComponent', () => {
  let component: GatinhoComponent;
  let fixture: ComponentFixture<GatinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
