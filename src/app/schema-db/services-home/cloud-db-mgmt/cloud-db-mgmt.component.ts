import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cloud-db-mgmt',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cloud-db-mgmt.component.html',
  styleUrl: './cloud-db-mgmt.component.scss'
})
export class CloudDbMgmtComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
