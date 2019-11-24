import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingsComponent } from './add-trainings.component';

describe('AddTrainingsComponent', () => {
  let component: AddTrainingsComponent;
  let fixture: ComponentFixture<AddTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
