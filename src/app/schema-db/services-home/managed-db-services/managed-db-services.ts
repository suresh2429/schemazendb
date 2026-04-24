import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-db-support',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './managed-db-services.html',
  styleUrl: './managed-db-services.scss'
})
export class DbSupportComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
