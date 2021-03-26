import { RouterModule } from '@angular/router';
import { MenuAdminHomeModule } from './menu-admin-home/menu-admin-home.module';
import { MenuAdminRoutingModule } from '../menu-admin/menu-admin-routing.module';
import { MenuAdminComponent } from '../menu-admin/menu-admin.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Tab2Module } from '../tab2/tab2.module';
import { Tab1Module } from '../tab1/tab1.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Tab1Component } from '../tab1/tab1.component';
import { MenuAdminHomeComponent } from './menu-admin-home/menu-admin-home.component';

@NgModule({
  declarations: [MenuAdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Tab2Module,
    Tab1Module,
    MenuAdminRoutingModule,
    MenuAdminHomeModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MenuAdminComponent,
    // MenuAdminHomeComponent,
    MatToolbarModule,
    MatIconModule,
    MenuAdminHomeModule,

  ],
})
export class MenuAdminModule {}
