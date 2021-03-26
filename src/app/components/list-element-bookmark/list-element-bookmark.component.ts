import { Subscription } from 'rxjs';
import { ServiceService } from './../../services/service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../../globalReducer';
import { BookMarkInterface } from '../../interfaces/interfaces';
import { StateBookMarks } from '../../ngrx/reducers/bookmark.reducers';

@Component({
  selector: 'app-list-element-bookmark',
  templateUrl: './list-element-bookmark.component.html',
  styleUrls: ['./list-element-bookmark.component.css'],
})
export class ListElementBookmarkComponent implements OnInit, OnDestroy {
  id: string = '';
  showLink: boolean = false;
  allBooks: BookMarkInterface[] = [];
  selectedBookMark: BookMarkInterface;
  suscriptionSelectedBookMark: Subscription;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private stateStore: Store<GlobalAppState>,
    public sanitizerurl: DomSanitizer
  ) {}
  async ngOnInit() {
    this.suscriptionSelectedBookMark = await this.subsSelectedBookmark();
    this.getSeletectedBookMark();
    //console.log(this.allBooks);
  }
  //===========================================================================================
  async getSeletectedBookMark() {
    this.id = await this.route.snapshot.params['id'];
    this.subsSelectedBookmark();
  }
  //obteniendo el bookmark seleccionado

  //============================================================
  subsSelectedBookmark() {
    return this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        let allBooks = await data.bookmarklist;

        if (this.allBooks) {
          this.allBooks = Object.values(allBooks);
          this.selectedBookMark = this.allBooks.find(
            (result) => result.id === this.id
          );
        }
        if (this.selectedBookMark) {
          this.sanitizerurl.bypassSecurityTrustUrl(this.selectedBookMark.link);
        }
      });
  }

  //==================================================
  async deleteBookmark(event) {
    let id = await event.target.id;
    console.log(id);
    this.service
      .deleteBookMark(id)
      .then(() => this.router.navigate(['/tabs/tab1']));
  }

  //===================================================================
  ngOnDestroy(): void {
    this.suscriptionSelectedBookMark.unsubscribe();
  }
}
