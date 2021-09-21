import { LIKE, SAVE, SAVE_CONTACTS } from "./types";


export function actionLike(data) {
  return {
    type: LIKE,
    payload: data,
  };
}

export function actionSaveAllPhotos(allPhotos) {
  return {
    type: SAVE,
    payload: allPhotos
  }
}

export function actionSaveAllContacts(allContacts) {
  return {
    type: SAVE_CONTACTS,
    payload: allContacts
  }
}

