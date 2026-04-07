import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTrainingsComponent } from './db-trainings.component';

describe('DbTrainingsComponent', () => {
  let component: DbTrainingsComponent;
  let fixture: ComponentFixture<DbTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbTrainingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
