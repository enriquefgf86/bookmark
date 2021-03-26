import { BookMarkInterface } from './../../interfaces/interfaces';
import { ServiceService } from './../../services/service.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as bookActions from '../actions/bookmark.actions';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

@Injectable()
export class BookmarkEffects {
  constructor(
    private actionObservable: Actions, //Observable mirando las acciones que se disparan inicializado en el constructor del effec
    private service: ServiceService
  ) {}

  @Effect({dispatch: false})
  chargeBookmarEffect$ = this.actionObservable.pipe(
    ofType(bookActions.createBook),

    mergeMap((action) =>
      this.service.createBookMarkService(action.bookmarkCreated)
    )
  );

}
