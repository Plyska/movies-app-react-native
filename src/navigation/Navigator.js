import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Photos from "../screens/Photos";
import Favorites from "../screens/Favorites";
import Details from "../screens/Details";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Photos" component={Photos} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Movie Applications"
        children={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Photos" component={Photos} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
