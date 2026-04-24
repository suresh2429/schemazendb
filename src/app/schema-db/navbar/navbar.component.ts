import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
// import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover';
import { NgbCollapseModule, NgbPopover, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgbPopoverModule, CommonModule, FormsModule, NgbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private timeout: any;
  private activePopover: NgbPopover | null = null;
  isMenuOpen = false;
  isMobile = false;
  showServices = false;
  showAboutUs = false;
  showExplore = false;

  ngOnInit() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  openPopover(popover: NgbPopover) {
    // Close previously open popover
    if (this.activePopover && this.activePopover !== popover) {
      this.activePopover.close();
    }

    clearTimeout(this.timeout);

    popover.open();

    this.activePopover = popover;
  }

  scheduleClose(popover: NgbPopover) {
    this.timeout = setTimeout(() => {
      popover.close();

      if (this.activePopover === popover) {
        this.activePopover = null;
      }
    }, 400);
  }

  cancelClose() {
    clearTimeout(this.timeout);
  }

  closePopover(popover: NgbPopover) {
    this.timeout = setTimeout(() => {
      popover.close();

      if (this.activePopover === popover) {
        this.activePopover = null;
      }
    }, 200);
  }

  services = [
    {
      id: 'service/managed-db-services',
      name: 'Managed Database Services',
      description: '24x7 monitoring, maintenance, and optimization to keep your databases secure, high-performing, and always available—without the need for an in-house DBA team.',
      image: 'assets/home_page_img.png',
    },
    {
      id: 'service/consulting',
      name: 'Database Consulting & Architecture',
      description: 'Expert guidance to design scalable, high-performance database systems. We help youoptimize architecture, improve efficiency, and align your data platform with business goals.',
      image: 'assets/nav-2.jpg',
    },
    {
      id: 'service/cloud-db',
      name: 'Cloud &Hybrid Database Management',
      description: 'End-to-end management of databases across cloud and hybrid environments, ensuring scalability, performance, security, and cost optimization.',
      image: 'assets/nav-3.jpg',
    },
    {
      id: 'service/db-migration',
      name: 'Database Migration & Upgrades',
      description: 'Seamless database migrations and upgrades with minimal downtime, ensuring data integrity, improved performance, and a smooth transition to modern platforms.',
      image: 'assets/nav-4.jpg',
    },
    {
      id: 'service/db-trainings',
      name: 'Database Trainings',
      description: 'Seamless migration with zero downtime.',
      image: 'assets/nav-5.jpg',
    },
    {
      id: 'service/dba-staffing-aug',
      name: 'DBA Staffing & Augmentation',
      description: 'Seamless migration with zero downtime.',
      image: 'assets/nav-6.jpg',
    },
     {
      id: 'service/db-performance-health-audit',
      name: 'Database Performance Tuning & Health Audit',
      description: 'Seamless migration with zero downtime.',
      image: 'assets/nav-7.jpg',
    },
    
  ];

  activeService = this.services[0];

  setActiveService(service: any) {
    this.activeService = service;
  }


  toggleServices() {
    this.showServices = !this.showServices;
  }

  toggleAboutUs() {
    this.showAboutUs = !this.showAboutUs;
  }

  toggleExplore() {
    this.showExplore = !this.showExplore;
  }
}
