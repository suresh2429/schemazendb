import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSupportComponent } from './managed-db-services';

describe('DbSupportComponent', () => {
  let component: DbSupportComponent;
  let fixture: ComponentFixture<DbSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
