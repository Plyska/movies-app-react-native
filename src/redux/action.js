import { LIKE } from "./types";
import { SAVE } from "./types";

export function actionLike(data, id, isLiked) {
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
