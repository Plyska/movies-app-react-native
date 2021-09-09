import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "../../navigation/Navigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/rootReducer";

const store = createStore(rootReducer);

export default function MainPage() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
