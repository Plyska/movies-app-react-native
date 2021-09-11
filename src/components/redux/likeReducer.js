import { LIKE } from "./types";
import getDataFromApi from "../../service/getDataFromApi";

const initialState = {
  photos: [],
};

//console.log(getDataFromApi());

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
