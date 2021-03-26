import { RouterModule } from '@angular/router';
import { MenuAdminHomeComponent } from './menu-admin-home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuAdminHomeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
  ],
  exports: [MatToolbarModule, MatButtonModule,RouterModule, MatIconModule, MatTabsModule,MenuAdminHomeComponent],
})
export class MenuAdminHomeModule {}
