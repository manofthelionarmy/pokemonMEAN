import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesetListComponent } from './moveset-list.component';

describe('MovesetListComponent', () => {
  let component: MovesetListComponent;
  let fixture: ComponentFixture<MovesetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
