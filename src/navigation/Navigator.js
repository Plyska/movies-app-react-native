import React from "react";
import Photos from "../screens/Photos";
import Favorites from "../screens/Favorites";
import Details from "../screens/Details";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import ContactList from "../screens/ContactList";
import AddContact from "../screens/AddContact";
import { useNavigation } from "@react-navigation/core";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

const StackNavigator = () => {
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
};

const ContactListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactList}
        options={({ navigation }) => ({
          headerRight: () => (
            <Icon
              name="add"
              size={25}
              color="black"
              onPress={() => navigation.navigate("Add", {})}
            />
          ),
        })}
      />
      <Stack.Screen name="Add" component={AddContact} />
    </Stack.Navigator>
  );
};

export default function Navigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Contact List" component={ContactListNavigator} />
    </Drawer.Navigator>
  );
}
