import { LIKE } from "./types";

const initialState = {
  photos: [],
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
