import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      // },
      // {
      //   path: 'components',
      //   loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
      //   data: {preload: true}
      // },
      {
        path: 'icons',
        loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
      },
      // {
      //   path: 'widgets',
      //   loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./chartjs/chartjs.module').then(m => m.ChartJSModule)
      // },
      {
        path: 'materials',
        loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'realtime',
        loadChildren: () => import('./realtime/realtime.module').then(m => m.RealTimeModule)
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
