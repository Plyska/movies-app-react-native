import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "../../navigation/Navigator";
import { Provider } from "react-redux";
import getStore from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = getStore();
export default function MainPage() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

