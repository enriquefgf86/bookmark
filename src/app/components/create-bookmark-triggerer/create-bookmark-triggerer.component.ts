import { CreateBookmarkModalComponent } from './../../modals/create-bookmark-modal/create-bookmark-modal.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-bookmark-triggerer',
  templateUrl: './create-bookmark-triggerer.component.html',
  styleUrls: ['./create-bookmark-triggerer.component.css'],
})
export class CreateBookmarkTriggererComponent implements OnInit {
  constructor( private modalDialog:MatDialog) {

  }

  ngOnInit(): void {}

  modalCreateBookMark() {
    this.modalDialog.open(CreateBookmarkModalComponent)
  }
}
