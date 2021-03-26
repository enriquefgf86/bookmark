import { Inject, Injectable, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../globalReducer';
import { BookMarkInterface } from '../interfaces/interfaces';
import { EditBookmarkModalComponent } from '../modals/edit-bookmark-modal/edit-bookmark-modal.component';
import * as bookMarkActions from '../ngrx/actions/bookmark.actions';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  allForms: BookMarkInterface[] = [];
  arrayBookmarks: BookMarkInterface[] = [];

  constructor(private stateStore: Store<GlobalAppState>
    // ,public dialogRef: MatDialogRef<EditBookmarkModalComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { bokkmarkById: BookMarkInterface },
    // public ngZone: NgZone
    ) {}
  //=============================================================
  async editBookMarkById(object: BookMarkInterface) {
    await this.stateStore.select('bookReducers').subscribe((data) => {
      let arrayBookMarks = Object.values(data.bookmarklist);

      this.arrayBookmarks = arrayBookMarks.map(
        (bookmark) =>
          [object].find((item) => item.id === bookmark.id) || bookmark
      );
    });
    if (this.arrayBookmarks) {
      this.stateStore.dispatch(
        bookMarkActions.setArrayOfBookMarks({
          arrayBookmarkCreated: this.arrayBookmarks,
        })
      );


    }
  }

  //===========================================================================================
  async createBookMarkService(objectBookMark: BookMarkInterface) {
    //creando objeto de toipo BookMarkInterface para triggerizar reducer

    // await this.stateStore.dispatch(
    //   bookMarkActions.createBook({ bookmarkCreated: objectBookMark })
    // );
    //triggerizando accion de creado de bookmark en ngrx

    await this.allForms.push(objectBookMark);
    console.log(this.allForms);
    //adicionando a la variable allForms el nuevo objeto creado

    this.stateStore.dispatch(
      bookMarkActions.setArrayOfBookMarks({
        arrayBookmarkCreated: this.allForms,
      })
    );
    //triggerizando accion de adicion a array de bookmarks en ngrx
    return objectBookMark;
  }
  //Servicio creacion de bookmark

  //===========================================================================================
  async deleteBookMark(id) {
    //console.log(id);
    await this.allForms.splice(
      this.allForms.findIndex((key) => key.id === id),
      1
    );
    this.stateStore.dispatch(
      bookMarkActions.setArrayOfBookMarks({
        arrayBookmarkCreated: this.allForms,
      })
    );
    //triggerizando el nuevo arraymomodificado  a ngrx

    this.stateStore.dispatch(
      bookMarkActions.deleteBoook({
        arrayBookmarkCreated: this.allForms,
      })
    )
    ;
    //triggerizando el nuevo arraymomodificado  a ngrx
  }
  //borrado de bookmark
}
