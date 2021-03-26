import { BookMarkInterface, TableFinal } from './../../interfaces/interfaces';
import { EditBookmarkModalComponent } from './../../modals/edit-bookmark-modal/edit-bookmark-modal.component';
import { Subscription } from 'rxjs';
import { ServiceService } from './../../services/service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../../globalReducer';
import { StateBookMarks } from '../../ngrx/reducers/bookmark.reducers';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-bookmarks',
  templateUrl: './list-bookmarks.component.html',
  styleUrls: ['./list-bookmarks.component.css'],
})
export class ListBookmarksComponent implements OnInit, OnDestroy {
  allBooks: BookMarkInterface[] = [];
  bookmarks: BookMarkInterface[] = [];
  tables: TableFinal[] = [];
  byGroup: string[] = [];
  filteredBookMarkById: BookMarkInterface[] = [];

  suscriptionToFinaltable: Subscription;
  suscriptionToUdtbookmarks: Subscription;

  constructor(
    private stateStore: Store<GlobalAppState>,
    private modalDialog: MatDialog,
    private service: ServiceService
  ) {}

  ngOnInit() {
    this.suscriptionToUdtbookmarks = this.updtateBookMarks();
    this.suscriptionToFinaltable = this.getFinaltables();
  }

  ngOnDestroy() {
    this.suscriptionToUdtbookmarks.unsubscribe();
    this.suscriptionToFinaltable.unsubscribe();
  }

  //===========================================================================================
  updtateBookMarks() {
    return this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        if (data.bookmarklist)
          this.allBooks = await Object.values(data.bookmarklist);
        this.byGroup = await data.counterGroups;
        this.byGroup = Object.keys(data.counterGroups);
      });
  }
  //actualizando estados de bookmark

  //===========================================================================================
  getFinaltables() {
    return this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        if (data.tablesComplete) {
          this.tables = await [...data.tablesComplete];
        }
      });
  }
  //obteniendo estructura final para obtencion de tablas en el muestro de todos
  //los bookmarks

  //===========================================================================================
  async deleteBookmark(event) {
    let id = await event.target.id;
    this.service.deleteBookMark(id);
  }
  //llamando el servicio de borrado de bookmark

  // //===========================================================================================
  async editBookMark(event) {
    await this.stateStore.select('bookReducers').subscribe(async (data) => {
      let arrayBookmarks = await Object.values(data.bookmarklist);
      this.filteredBookMarkById = arrayBookmarks.filter(
        (element) => element.id === event.target.id
      );
    });
    if (this.filteredBookMarkById) {
      this.modalDialog.open(EditBookmarkModalComponent, {
        data: { bokkmarkById: Object.values(this.filteredBookMarkById) },
      });
    }
  }
}
