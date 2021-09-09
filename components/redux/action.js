import { LIKE } from "./types";

export function actionLike(data) {
    return {
        type: LIKE,
        payload: data
    }
}