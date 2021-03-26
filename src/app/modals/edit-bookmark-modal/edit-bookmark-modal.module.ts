import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EditBookmarkModalComponent } from './edit-bookmark-modal.component';




@NgModule({
  declarations: [EditBookmarkModalComponent],
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
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    EditBookmarkModalComponent
  ],
})
export class EditBookmarkModalModule { }
