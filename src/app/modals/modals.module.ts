import { EditBookmarkModalModule } from './edit-bookmark-modal/edit-bookmark-modal.module';
import { CreateBookmarkModalModule } from './create-bookmark-modal/create-bookmark-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookmarkModalComponent } from './edit-bookmark-modal/edit-bookmark-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    CreateBookmarkModalModule,
    EditBookmarkModalModule
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CreateBookmarkModalModule,
    MatButtonModule,
    EditBookmarkModalModule

  ],
})
export class ModalsModule {}
