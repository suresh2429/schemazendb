import { Routes } from '@angular/router';

export const schemaDBRoutes: Routes = [
  
  {
    path: 'home',
    loadComponent: () =>
      import('./home-page/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services-home/services-home.component').then(
        (m) => m.ServicesHomeComponent,
      ),
  },
  {
    path: 'company-overview',
    loadComponent: () =>
      import('./aboutUs/company-overview/company-overview.component').then(
        (m) => m.CompanyOverviewComponent,
      ),
  },
  {
    path: 'our-team',
    loadComponent: () =>
      import('./aboutUs/our-team/our-team.component').then(
        (m) => m.OurTeamComponent,
      ),
  },
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   loadComponent: () =>
      //     import('./explore/explore-more/explore-more.component').then(
      //       (m) => m.ExploreMoreComponent,
      //     ),
      // },
      {
        path: 'blog',
        loadComponent: () =>
          import('./explore/blog/blog.component').then((m) => m.BlogComponent),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent,
      ),
  },
  // {
  //   path: 'it-contract-supply',
  //   loadComponent: () =>
  //     import('./it-support/it-support.component').then(
  //       (m) => m.ItSupportComponent,
  //     ),
  // },
  {
  path: 'service/managed-db-services',
  loadComponent: () =>
    import('./services-home/managed-db-services/managed-db-services')
      .then(m => m.DbSupportComponent)
},
  {
  path: 'service/consulting',
  loadComponent: () =>
    import('./services-home/consulting/consulting.component')
      .then(m => m.ConsultingComponent)
},
{
  path: 'service/cloud-db',
  loadComponent: () =>
    import('./services-home/cloud-db-mgmt/cloud-db-mgmt.component')
      .then(m => m.CloudDbMgmtComponent)
},
{
  path: 'service/db-migration',
  loadComponent: () =>
    import('./services-home/db-migration/db-migration.component')
      .then(m => m.DbMigrationComponent)
},
{
  path: 'service/dba-staffing-aug',
  loadComponent: () =>
    import('./services-home/dba-staffing-aug/dba-staffing-aug')
      .then(m => m.ItContractSupplyComponent)
},

{
  path: 'service/db-trainings',
  loadComponent: () =>
    import('./services-home/db-trainings/db-trainings.component')
      .then(m => m.DbTrainingsComponent)
},
{
  path: 'service/db-performance-health-audit',
  loadComponent: () =>
    import('./services-home/db-performance-health-audit/db-performance-health-audit.component')
      .then(m => m.DbPerformanceHealthAuditComponent)
},
{
  path: 'blog/blog-1',
  loadComponent: () =>
    import('./explore/blog-1/blog-1.component')
      .then(m => m.Blog1Component)
},
{
  path: 'blog/blog-2',
  loadComponent: () =>
    import('./explore/blog-2/blog-2.component')
      .then(m => m.Blog2Component)
},
{
  path: 'blog/blog-3',
  loadComponent: () =>
    import('./explore/blog-3/blog-3.component')
      .then(m => m.Blog3Component)
},
];
