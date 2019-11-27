import React from "react";
import { Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/users/Login";
import ItemListScreen from "../screens/inventory/ItemList";
import ItemDataScreen from "../screens/inventory/ItemCreation";
import ItemReportScreen from "../screens/inventory/ItemReport";
import ItemHistoryScreen from "../screens/inventory/ItemHistory";
import ItemHistory from "../screens/inventory/ItemHistory";

import Colors from "../constants/Colors";

// const AuthNavigator = createStackNavigator(
//   {
//     Authenticate: LoginScreen
//   },
//   {
//     headerMode: "none",
//     navigationOptions: {
//       headerVisible: false
//     }
//   }
// );

// const ItemNavigator = createStackNavigator(
//   {
//     ItemList: ItemListScreen,
//     ItemData: ItemDataScreen,
//     ItemHistory: ItemHistoryScreen
//   },
//   { defaultNavigationOptions: defaultNavOptions }
// );

// const MainNavigator = createSwitchNavigator({
//   ItemDetails: ItemNavigator,
//   Auth: AuthNavigator
// });

// const MainTabs = createBottomTabNavigator({
//   Main: MainNavigator,
//   ItemReport: ItemReportScreen
// });

// export default createAppContainer(MainTabs);

///// IMPORTANT REMINDERS //////
/// Remember laging may sequence na subpages muna at nasa ilalim
/// ung main pages

const AuthStack = createStackNavigator({
  Landing: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  SignIn: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  }
});

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.tintedText
};

const ItemNavigator = createStackNavigator(
  {
    ItemList: ItemListScreen,
    ItemCreate: ItemDataScreen,
    ItemData: ItemDataScreen,
    ItemHistory: ItemHistoryScreen
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const MainTabs = createBottomTabNavigator({
  List: ItemListScreen,
  History: ItemHistoryScreen,
  Report: ItemReportScreen
});

const AppNavigator = createSwitchNavigator({
  Loading: SplashScreen,
  Auth: AuthStack,
  App: MainTabs,
  Inventory: ItemNavigator
});

export default createAppContainer(AppNavigator);
