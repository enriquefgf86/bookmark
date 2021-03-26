import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListElementBookmarkModule } from './../../components/list-element-bookmark/list-element-bookmark.module';
import { ComponentsModule } from '../../components/components.module';
import { Tab2Component } from '../tab2/tab2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Tab2RoutingModule } from './tab2-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [Tab2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Tab2RoutingModule,
    ComponentsModule,
    ListElementBookmarkModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [Tab2Component],
})
export class Tab2Module {}
