import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomecoComponent } from './recomeco.component';

describe('RecomecoComponent', () => {
  let component: RecomecoComponent;
  let fixture: ComponentFixture<RecomecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
