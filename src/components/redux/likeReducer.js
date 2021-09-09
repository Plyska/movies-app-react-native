import { LIKE } from "./types";

const initialState = {
  data: [],
};

export const likeReducer = (state = initialState, action) => {
  if (action.type === LIKE) {
    return { ...state };
  }
  return state;
};
