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
      id:'managed-db-services',
      title: 'Managed Database Services',
      description:
        '24x7 monitoring, maintenance, and optimization to keep your databases secure, high-performing, and always available—without the need for an in-house DBA team.',
      icon: 'bi-database',
    },
    {
      id:'db-trainings',
      title: 'Database Trainings',
      description:
        'Practical, hands-on database training programs designed to build strong administration, performance tuning, and operational skills. We focus on real-world scenarios and best practices to help teams effectively manage and optimize database environments.',
      icon: 'bi-gear',
    },
    {
      id:'cloud-db',
      title: 'Cloud & Hybrid Database Management',
      description:
        'End-to-end management of databases across cloud and hybrid environments, ensuring scalability, performance, security, and cost optimization.',
      icon: 'bi-cloud',
    },
    {
      id:'db-migration',
      title: 'Database Migration & Upgrades',
      description:
        'Seamless database migrations and upgrades with minimal downtime, ensuring data integrity, improved performance, and a smooth transition to modern platforms.',
      icon: 'bi-arrow-left-right',
    },
    {
      id:'consulting',
      title: 'Database Consulting & Architecture',
      description:
        'Expert guidance to design scalable, high-performance database systems. We help you optimize architecture, improve efficiency, and align your data platform with business goals.',
      icon: 'bi-diagram-3',
    },
     {
      id:'dba-staffing-aug',
      title: 'DBA Staffing & Augmentation',
      description:
        'Flexible staffing solutions to provide experienced database professionals for contract and permanent roles. We align skilled DBA resources with your technical and operational requirements to support projects and ongoing operations.',
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
