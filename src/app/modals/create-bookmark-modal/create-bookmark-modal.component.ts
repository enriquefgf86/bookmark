import { ServiceService } from './../../services/service.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../../globalReducer';
import { BookMarkInterface, groupDetail } from '../../interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { StateBookMarks } from '../../ngrx/reducers/bookmark.reducers';
import { Subscription } from 'rxjs';
import * as bookMarkActions from '../../ngrx/actions/bookmark.actions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-create-bookmark-modal',
  templateUrl: './create-bookmark-modal.component.html',
  styleUrls: ['./create-bookmark-modal.component.css'],
})
export class CreateBookmarkModalComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  allBooks: BookMarkInterface[] = [];
  counter: number = null;
  groups: String[] = ['Work', 'Leisure', 'Personal', 'Sports'];
  subscribed: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private stateStore: Store<GlobalAppState>,
    public dialogRef: MatDialogRef<CreateBookmarkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { bokkmarkById: BookMarkInterface },
    public ngZone: NgZone
  ) {
    this.groups;
  }

  ngOnInit(): void {
    this.groups;
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      group: ['', Validators.required],
    });

    this.createBook();
    this.subscribed = this.getAllBooks();
  }

  ngOnDestroy(): void {
    this.subscribed.unsubscribe();
  }

  //===========================================================================================
  async createBook() {
    let [
      { title, link, group },
      img,
      v1options,
      linkForIframe,
    ] = await Promise.all([
      this.createForm.value,
      '',
      {
        node: [
          this.createForm.get('title').value,
          this.createForm.get('link').value,
          this.createForm.get('group').value,
        ],
        clockseq: 0x1234,
        msecs: new Date('2011-11-01').getTime(),
        nsecs: 5678,
      },
      `${this.createForm.get('link').value}&embedded=true`,
    ]);

    if (this.createForm.invalid) {
      return;
    }

    if (!this.validURLHttps(link)) {
      return;
    }

    let id = uuidv4(v1options);

    let bookMarkData: BookMarkInterface = {
      id,
      title,
      link,
      linkForIframe,
      group,
      img,
    };
    // this.service.createBookMarkService(bookMarkData);
    this.stateStore.dispatch(
      bookMarkActions.createBook({ bookmarkCreated: bookMarkData })
    );

    this.getAllBooks();
    this.closeDialog();
  }
  //===========================================================================================
  getAllBooks() {
    return this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        if (data.tablesComplete) {
          this.allBooks = data.tablesComplete;
          this.counter = data.counting;
        }
      });
  }
  //obteniendo array de bookmarks

  //===========================================================================================
  validURLHttps(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  }
  //validador de link url

  closeDialog() {
    this.dialogRef.close();
  }
}
