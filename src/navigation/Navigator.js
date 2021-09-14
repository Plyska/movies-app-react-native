import React from "react";
import Photos from "../screens/Photos";
import Favorites from "../screens/Favorites";
import Details from "../screens/Details";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === "Photos") {
            iconName = "images-outline";
          } else if (route.name === "Favorites") {
            iconName = "heart-half-outline";
          }
          return (
            <Icon name={iconName} size={25} color="black" type="ionicon" />
          );
        },
      })}
    >
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
