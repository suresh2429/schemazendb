import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbPerformanceHealthAuditComponent } from './db-performance-health-audit.component';

describe('DbPerformanceHealthAuditComponent', () => {
  let component: DbPerformanceHealthAuditComponent;
  let fixture: ComponentFixture<DbPerformanceHealthAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbPerformanceHealthAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbPerformanceHealthAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
