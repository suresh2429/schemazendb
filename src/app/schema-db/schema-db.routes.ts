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
  path: 'service/db-support',
  loadComponent: () =>
    import('./services-home/db-support/db-support.component')
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
  path: 'service/it-contract-supply',
  loadComponent: () =>
    import('./services-home/it-contract-supply/it-contract-supply.component')
      .then(m => m.ItContractSupplyComponent)
},

{
  path: 'service/db-trainings',
  loadComponent: () =>
    import('./services-home/db-trainings/db-trainings.component')
      .then(m => m.DbTrainingsComponent)
},

];
