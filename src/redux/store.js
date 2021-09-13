import { createStore } from "redux";
import persistedReducer from "./rootReducer";
import { persistStore } from "redux-persist";

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
