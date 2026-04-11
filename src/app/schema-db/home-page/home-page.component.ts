import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, NgbNavModule, NgbCarouselModule, CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [NgbCarouselConfig],
})
export class HomePageComponent {
  active = 1;
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  clientsCount = 0;
  databasesCount = 0;
  migrationsCount = 0;
  transactionsCount = 0;

  ngAfterViewInit(): void {
    this.animateValue('clientsCount', 0, 60, 2000);
    this.animateValue('databasesCount', 0, 2340, 2000);
    this.animateValue('migrationsCount', 0, 140, 2000);
    this.animateValue('transactionsCount', 0, 2, 2000);
  }
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
  animateValue(
    property: keyof HomePageComponent,
    start: number,
    end: number,
    duration: number,
  ): void {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      (this[property] as number) = Math.floor(progress * (end - start) + start);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
}
