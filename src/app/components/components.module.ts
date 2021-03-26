import { ListElementBookmarkModule } from './list-element-bookmark/list-element-bookmark.module';
import { CreateBookmarkTriggererModule } from './create-bookmark-triggerer/create-bookmark-triggerer.module';
import { ListBookmarksModule } from './list-bookmarks/list-bookmarks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    ListBookmarksModule,
    CreateBookmarkTriggererModule,
    ListElementBookmarkModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatToolbarModule,
    ListBookmarksModule,
  ],
})
export class ComponentsModule {}
