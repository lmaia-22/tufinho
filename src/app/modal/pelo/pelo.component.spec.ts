import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeloComponent } from './pelo.component';

describe('PeloComponent', () => {
  let component: PeloComponent;
  let fixture: ComponentFixture<PeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
