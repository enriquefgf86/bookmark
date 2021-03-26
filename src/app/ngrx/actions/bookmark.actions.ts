import { createAction, props } from '@ngrx/store';
import { BookMarkInterface } from '../../interfaces/interfaces';

  //===========================================================================================
  export const createBook = createAction(
  '[creation] createBook',
  props<{ bookmarkCreated: BookMarkInterface }>()
);
//accion crear book mark

 //===========================================================================================
 export const createBookProcess = createAction(
  '[creation] createBookProcess'
);
//accion crear book mark


//===========================================================================================
export const editBook = createAction(
  '[creation] editBook',
  props<{ arrayBookmarkCreated: BookMarkInterface[]  }>()
);
//accion crear book mark

//===========================================================================================
export const getAllBook = createAction(
  '[creation] getAllBook',
  props<{allbooks: BookMarkInterface[] }>()
);
//accion crear book mark

  //===========================================================================================
  export const deleteBoook = createAction(
  '[creation] deleteBoook',
  props<{ arrayBookmarkCreated: BookMarkInterface[]}>()
);
//accion borrar bookmark

  //===========================================================================================
  export const setArrayOfBookMarks = createAction(
  '[creation] setArrayOfBookMarks',
  props<{ arrayBookmarkCreated: BookMarkInterface[] }>()
);
//accion adicionar al array un nuevo bookmark
