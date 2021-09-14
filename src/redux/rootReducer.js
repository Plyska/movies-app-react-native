import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { likeReducer } from "./likeReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  photos: likeReducer,
});

export default persistReducer(persistConfig, rootReducer);
