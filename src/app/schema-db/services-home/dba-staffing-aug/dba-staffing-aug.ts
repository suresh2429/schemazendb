import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dba-staffing-aug',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dba-staffing-aug.html',
  styleUrl: './dba-staffing-aug.scss'
})
export class ItContractSupplyComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
