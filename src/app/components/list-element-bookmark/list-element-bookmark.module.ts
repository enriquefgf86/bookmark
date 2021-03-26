import { MatIconModule } from '@angular/material/icon';
import { PipeimgModule } from './../../pipes/pipeimg.module';
import { ListElementBookmarkComponent } from './list-element-bookmark.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditBookmarkModalModule } from '../../modals/edit-bookmark-modal/edit-bookmark-modal.module';

@NgModule({
  declarations: [ListElementBookmarkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    PipeimgModule,
    MatIconModule,
    EditBookmarkModalModule,
  ],
  exports: [
    ListElementBookmarkComponent,
    MatButtonModule,
    MatCardModule,
    PipeimgModule,
    MatIconModule,
  ],
})
export class ListElementBookmarkModule {}
