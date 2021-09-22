import { LIKE, SAVE, ADD_CONTACT, REMOVE_CONTACT } from "./types";

export function actionLike(data) {
  return {
    type: LIKE,
    payload: data,
  };
}

export function actionSaveAllPhotos(allPhotos) {
  return {
    type: SAVE,
    payload: allPhotos,
  };
}

export function actionAddContact(newContact) {
  return {
    type: ADD_CONTACT,
    payload: newContact,
  };
}

export function actionRemoveContact(contact) {
  return {
    type: REMOVE_CONTACT,
    payload: contact,
  };
}
