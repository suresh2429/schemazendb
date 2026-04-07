import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NgbCarouselModule],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.scss',
})
export class ServicesHomeComponent {
  services = [
    {
      id:'db-support',
      title: 'Database Support',
      description:
        '24/7 monitoring, proactive health checks, troubleshooting and optimization.',
      icon: 'bi-database',
    },
    {
      id:'db-trainings',
      title: 'Database Trainings',
      description:
        'End-to-end database administration handled by certified experts.',
      icon: 'bi-gear',
    },
    {
      id:'cloud-db',
      title: 'Cloud Database Management',
      description:
        'AWS, Azure, GCP database deployment, scaling, and optimization.',
      icon: 'bi-cloud',
    },
    {
      id:'db-migration',
      title: 'Database Migration',
      description:
        'Secure, zero-downtime migration across platforms and environments.',
      icon: 'bi-arrow-left-right',
    },
    {
      id:'consulting',
      title: 'Consulting Services',
      description:
        'Data pipelines, ETL workflows, and real-time processing solutions.',
      icon: 'bi-diagram-3',
    },
     {
      id:'it-contract-supply',
      title: 'IT Contract Supply',
      description:
        'Data pipelines, ETL workflows, and real-time processing solutions.',
      icon: 'bi-diagram-3',
    },
  ];

  cards = [
    {
      title: 'DBA Managed Services',
      description:
        'Comprehensive database management and support services to ensure optimal performance, security, and reliability for your databases.',
      personName: 'Satya',
      personTitle: 'CEO, Tech Solutions Inc.',
    },
    {
      title: 'Remote DBA Support',
      description:
        'Expert remote database administration services to monitor, maintain, and optimize your databases from anywhere, ensuring high availability and performance.',
      personName: 'Priya',
      personTitle: 'CTO, Data Insights Ltd.',
    },
    {
      title: 'OnSite DBA Support',
      description:
        'Professional on-site database administration services to provide hands-on support, troubleshooting, and optimization for your databases.',
      personName: 'Ravi',
      personTitle: 'IT Manager, Global Enterprises',
    },
    {
      title: 'Database Development',
      description:
        'Custom database development services to design, build, and optimize databases tailored to your specific business needs and requirements.',
      personName: 'Anita',
      personTitle: 'Lead Developer, Innovatech Solutions',
    },
  ];


constructor(private router: Router) {}

goToService(serviceId: string) {
  this.router.navigate(['/schema-db/service', serviceId]);
}
}
