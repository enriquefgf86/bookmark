import { Tab1Component } from './tab1.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: Tab1Component,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1RoutingModule {}
