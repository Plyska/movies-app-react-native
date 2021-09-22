import { LIKE, SAVE, ADD_CONTACT, REMOVE_CONTACT } from "./types";

const initialState = {
  favorites: [],
  allPhotos: [],
  allContacts: [],
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return { ...state, favorites: action.payload };
    case SAVE:
      return { ...state, allPhotos: action.payload };
    case ADD_CONTACT:
      const contacts = [...state.allContacts, action.payload];
      return { ...state, allContacts: contacts };
    case REMOVE_CONTACT:
      return {...state, allContacts: action.payload };
    default:
      return state;
  }
};
