import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookmarkModalComponent } from './create-bookmark-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreateBookmarkModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    CreateBookmarkModalComponent,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class CreateBookmarkModalModule {}
