import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadkittyComponent } from './sadkitty.component';

describe('SadkittyComponent', () => {
  let component: SadkittyComponent;
  let fixture: ComponentFixture<SadkittyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadkittyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadkittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
