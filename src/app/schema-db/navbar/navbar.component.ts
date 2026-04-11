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
      id: 'service/db-support',
      name: 'Database Support',
      description: '24/7 monitoring, troubleshooting, and database health.',
      image: 'assets/home_page_img.png',
    },
    {
      id: 'service/consulting',
      name: 'Consulting',
      description: 'Architecture design and performance consulting.',
      image: 'assets/home_page_img.png',
    },
    {
      id: 'service/cloud-db',
      name: 'Cloud Database Management',
      description: 'AWS, Azure, GCP database management.',
      image: 'assets/home_page_img.png',
    },
    {
      id: 'service/db-migration',
      name: 'Database Migrations',
      description: 'Seamless migration with zero downtime.',
      image: 'assets/home_page_img.png',
    },
    {
      id: 'service/db-trainings',
      name: 'Database Trainings',
      description: 'Seamless migration with zero downtime.',
      image: 'assets/home_page_img.png',
    },
    {
      id: 'service/it-contract-supply',
      name: 'IT Contract Supply',
      description: 'Seamless migration with zero downtime.',
      image: 'assets/home_page_img.png',
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
