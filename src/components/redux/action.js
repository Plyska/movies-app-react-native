import { LIKE } from "./types";
import { SAVE } from "./types";

export function actionLike(data, id) {
  const isLiked = false;
  console.log(id, "id");
  const newArr = [...data];
  newArr.forEach((item) => {
    if (item.id === id) {
      item.isLiked = !isLiked;
    }
  });
  return {
    type: LIKE,
    payload: newArr,
  };
}

export function setPhotos(data) {
  return {
    type: SAVE,
    payload: data
  }
}
