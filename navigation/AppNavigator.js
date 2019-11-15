import React from "react";
import { Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/users/Login";
import ItemListScreen from "../screens/inventory/ItemList";
import ItemDataScreen from "../screens/inventory/ItemCreation";

const AuthNavigator = createStackNavigator(
  {
    Authenticate: LoginScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ItemNavigator = createStackNavigator(
  {
    ItemList: ItemListScreen,
    ItemData: ItemDataScreen
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Inventory: ItemNavigator
});

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "red" : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : "red"
};

export default createAppContainer(MainNavigator);
