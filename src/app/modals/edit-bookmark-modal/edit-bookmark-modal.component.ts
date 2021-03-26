import { BookMarkInterface } from '../../interfaces/interfaces';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../../globalReducer';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-edit-bookmark-modal',
  templateUrl: './edit-bookmark-modal.component.html',
  styleUrls: ['./edit-bookmark-modal.component.scss'],
})
export class EditBookmarkModalComponent implements OnInit {
  editForm: FormGroup;
  bookMarkToEdit: BookMarkInterface;
  false: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private stateStore: Store<GlobalAppState>,
    public dialogRef: MatDialogRef<EditBookmarkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { bokkmarkById: BookMarkInterface },
    public ngZone: NgZone
  ) {}

  async ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
    });
    this.bookMarkToEdit = await this.data.bokkmarkById;
  }
  //=====================================================================================
  async editBook() {
    let [{ title, link }, { id, img, group }] = await Promise.all([
      this.editForm.value,
      this.data.bokkmarkById[0],
    ]);

    if (!title) {
      title = this.bookMarkToEdit[0].title;
    }
    if (!link) {
      link = this.bookMarkToEdit[0].link;
    }
    let linkForIframe = `${link}&embedded=true`; //link modificado para mostrar dentor de iframe

    let bookModified: BookMarkInterface = {
      id,
      title,
      link,
      linkForIframe,
      group,
      img,
    };
    // console.log(bookModified);

    this.service.editBookMarkById(bookModified);

    this.closeDialog();
  }
  //=========================================================
  closeDialog() {
    this.dialogRef.close();
  }
}
