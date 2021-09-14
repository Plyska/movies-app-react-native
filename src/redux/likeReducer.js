import { LIKE } from "./types";
import { SAVE } from "./types";

const initialState = {
  favorites: [],
  allPhotos: []
};

export const likeReducer = (state = initialState, action) => {
//  console.log(action, 'action');
  switch (action.type) {
    case LIKE:
      return { ...state, favorites: action.payload };
    case SAVE:
      return { ...state, allPhotos: action.payload }
    default:
      return state;
  }
};
