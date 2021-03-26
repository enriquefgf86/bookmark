import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeimgPipe } from './pipeimg.pipe';

@NgModule({
  declarations: [PipeimgPipe],
  imports: [CommonModule],
  exports: [PipeimgPipe],
})
export class PipeimgModule {}
