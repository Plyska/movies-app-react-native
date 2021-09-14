import { LIKE } from "./types";
import { SAVE } from "./types";

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
