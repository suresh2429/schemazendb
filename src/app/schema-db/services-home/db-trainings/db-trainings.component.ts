import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-db-trainings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './db-trainings.component.html',
  styleUrl: './db-trainings.component.scss'
})
export class DbTrainingsComponent {
    serviceId: any;
  
  constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
