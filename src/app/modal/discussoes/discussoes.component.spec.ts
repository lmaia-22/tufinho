import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussoesComponent } from './discussoes.component';

describe('DiscussoesComponent', () => {
  let component: DiscussoesComponent;
  let fixture: ComponentFixture<DiscussoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
