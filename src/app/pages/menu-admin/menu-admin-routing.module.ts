import { NgModule } from '@angular/core';
import { MenuAdminComponent } from './menu-admin.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuAdminHomeComponent } from './menu-admin-home/menu-admin-home.component';

const routes: Routes = [
  
  {
    path: '*',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: MenuAdminComponent,
    children: [
      {
        path: '',
        component: MenuAdminHomeComponent,
      },
      {
        path: 'tab1',
        loadChildren: () =>
          import('../../pages/tab1/tab1.module').then((m) => m.Tab1Module),
      },
      {
        path: 'tab2/:id',
        loadChildren: () =>
          import('../../pages/tab2/tab2.module').then((m) => m.Tab2Module),
      },
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAdminRoutingModule {}
