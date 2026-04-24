import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-db-performance-health-audit',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './db-performance-health-audit.component.html',
  styleUrl: './db-performance-health-audit.component.scss'
})
export class DbPerformanceHealthAuditComponent {
  serviceId: any;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.serviceId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.serviceId);
  }

}
