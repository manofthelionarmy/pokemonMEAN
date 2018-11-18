import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackListComponent } from './attack-list.component';

describe('AttackListComponent', () => {
  let component: AttackListComponent;
  let fixture: ComponentFixture<AttackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
