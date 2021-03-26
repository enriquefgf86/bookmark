import * as helpers from './helperReducers';
import { BookMarkInterface } from './../../interfaces/interfaces';
import * as books from '../actions/bookmark.actions';
import { createReducer, on } from '@ngrx/store';
import { Injectable } from '@angular/core';

export interface StateBookMarks {
  bookmarklist: BookMarkInterface[];
  bookMark: BookMarkInterface;
  counting: number;
  counterGroups: string[];
  headerGroups: string[];
  tablesComplete: any[];
  editBook:BookMarkInterface ,
  temp:BookMarkInterface,
  creatingBook:Boolean
}

export const initialStateBookMarks: StateBookMarks = {
  bookmarklist: [],
  counting: null,
  bookMark: null,
  counterGroups: [],
  headerGroups: [],
  tablesComplete: [],
  editBook:null,
  temp:null,
  creatingBook:false,
};

  //===========================================================================================
 const helperFunctions= new helpers.HelperReducer()
  const _bookMarkReducer = createReducer(
  initialStateBookMarks,
  on(books.setArrayOfBookMarks, (state, { arrayBookmarkCreated }) => ({
    ...state,

    bookmarklist: { ...(state.bookmarklist = []), ...arrayBookmarkCreated },
    //adicion de bookmark

    counting: arrayBookmarkCreated.length,
    //conteo de bookmarks

    counterGroups:helperFunctions.counterGroups(arrayBookmarkCreated),
    //Agrupadno por grupos los distintos objetos de elementos creados

    tablesComplete:helperFunctions.groupAndSubList(arrayBookmarkCreated )
  })),
  //creando una tabla final con cada grupo de encabezado asi como los objetos
  //correspondientes

  on(books.createBook, (state, { bookmarkCreated }) => ({
    ...state,
    bookMark: bookmarkCreated,
  })),
  //creando bookmark

  on(books.deleteBoook, (state, { arrayBookmarkCreated }) => ({
    ...state,
    bookmarklist: { ...(state.bookmarklist = []), ...arrayBookmarkCreated },
  })),
  //accion que elimina el listado de bookmarklist y actualiza de nuevo
  //con un nuevo array

  on(books.getAllBook, (state,{allbooks}) => ({
    ...state,
    all:{...allbooks}
  })),
  //accion que elimina el listado de bookmarklist y actualiza de nuevo
  //con un nuevo array

);

export function BookMarkReducer(state, action) {
  return _bookMarkReducer(state, action);
}
