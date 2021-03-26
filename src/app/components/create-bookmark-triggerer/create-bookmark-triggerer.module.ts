import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookmarkTriggererComponent } from './create-bookmark-triggerer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CreateBookmarkTriggererComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [CreateBookmarkTriggererComponent, MatIconModule, MatButtonModule],
})
export class CreateBookmarkTriggererModule {}
