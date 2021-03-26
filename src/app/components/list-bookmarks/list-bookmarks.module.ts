import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListBookmarksComponent } from './list-bookmarks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PipeimgModule } from '../../pipes/pipeimg.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ListBookmarksComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatChipsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    PipeimgModule,
  ],
  exports: [
    ListBookmarksComponent,
    RouterModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ListBookmarksModule {}
