import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackCreateComponent } from './attack-create.component';

describe('AttackCreateComponent', () => {
  let component: AttackCreateComponent;
  let fixture: ComponentFixture<AttackCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
