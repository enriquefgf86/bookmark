import { ListBookmarksModule } from './../../components/list-bookmarks/list-bookmarks.module';
import { CreateBookmarkTriggererModule } from './../../components/create-bookmark-triggerer/create-bookmark-triggerer.module';
import { Tab1RoutingModule } from '../tab1/tab1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1.component';
import { ComponentsModule } from '../../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [Tab1Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Tab1RoutingModule,
    ComponentsModule,
    MatIconModule,
    CreateBookmarkTriggererModule,
    ListBookmarksModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
  ],
  exports: [Tab1Component],
})
export class Tab1Module {}
