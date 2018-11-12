import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesetCreateComponent } from './moveset-create.component';

describe('MovesetCreateComponent', () => {
  let component: MovesetCreateComponent;
  let fixture: ComponentFixture<MovesetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
