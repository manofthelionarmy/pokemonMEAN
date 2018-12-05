import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCreateComponent } from './stats-create.component';

describe('StatsCreateComponent', () => {
  let component: StatsCreateComponent;
  let fixture: ComponentFixture<StatsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
