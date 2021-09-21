import { LIKE, SAVE, SAVE_CONTACTS } from "./types";

const initialState = {
  favorites: [],
  allPhotos: [],
  allContacts: []
};

export const likeReducer = (state = initialState, action) => {
  //  console.log(action, 'action');
  switch (action.type) {
    case LIKE:
      return { ...state, favorites: action.payload };
    case SAVE:
      return { ...state, allPhotos: action.payload };
    case SAVE_CONTACTS:
      return { ...state, allContacts: action.payload };
    default:
      return state;
  }
};
