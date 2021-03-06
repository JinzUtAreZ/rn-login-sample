import React from "react";
import { Platform, Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/Auth/Login";
import RegisterScreen from "../screens/Auth/Register";
import Register1Screen from "../screens/Auth/Register1";
import ItemListScreen from "../screens/inventory/ItemList";
import ItemDataScreen from "../screens/inventory/ItemCreation";
import ItemReportScreen from "../screens/inventory/ItemReport";
import ItemHistoryScreen from "../screens/inventory/ItemHistory";

import MessageScreen from "../screens/users/Messages";
import ActivityScreen from "../screens/users/Activity";
import UserListScreen from "../screens/users/UserList";
import UserInfoScreen from "../screens/users/UserInfo";
import ExampleScreen from "../screens/Auth/DropDownSearch";

import TestPageScreen from "../screens/Auth/TestPage";
import ParentChildScreen from "../components/Test/Parent";
import RadioButtonScreen from "../components/Test/RBParent";
import MultiCheckScreen from "../components/Test/MultiCheckBox";

import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import SideBar from "../components/UI/Sidebar";

///// IMPORTANT REMINDERS //////
/// Remember laging may sequence na subpages muna at nasa ilalim
/// ung main pages

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

const UserInfoNavi = createStackNavigator(
  {
    UserInfo: UserInfoScreen,
    Activity: ActivityScreen,
    Messages: MessageScreen
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const UserListNavi = createStackNavigator(
  {
    UserList: UserListScreen
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegisterScreen,
    //screen: Register1Screen,
    navigationOptions: defaultNavOptions
  },
  Example: {
    screen: ExampleScreen,
    navigationOptions: defaultNavOptions
  }
  // TestPage: {
  //   //screen: ParentChild,
  //   //screen: RadioButtonScreen,
  //   screen: MultiCheckScreen,
  //   navigationOptions: defaultNavOptions
  // }
});

const TestStack = createStackNavigator(
  {
    ElementSample: TestPageScreen,
    ParentChild: ParentChildScreen,
    RadioButton: RadioButtonScreen,
    MultiCheck: MultiCheckScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

/// STACK NAVIGATOR lang pang redirect
/// props.navigation.navigate({
///  routeName: "UserInfo"
/// });
const DrawerNavigator = createDrawerNavigator(
  {
    User: {
      screen: UserInfoNavi,
      navigationOptions: {
        title: "Information",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        )
      }
    },
    UserList: {
      screen: UserListNavi,
      navigationOptions: {
        title: "Users List",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user-check" size={16} color={tintColor} />
        )
      }
    },
    ProductList: {
      screen: ItemNavigator,
      navigationOptions: {
        title: "Product List",
        drawerIcon: ({ tintColor }) => (
          <Feather name="briefcase" size={16} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get("window").width * 0.75,
    hideStatusBar: true,

    contentOptions: {
      activeBackgroundColor: "rgba(212,118,207, 0.2)",
      activeTintColor: "#53115B",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Loading: SplashScreen,
  Auth: AuthStack,
  //App: MainTabs,
  //Inventory: ItemNavigator,
  Test: TestStack,
  AppDetails: DrawerNavigator
});

export default createAppContainer(AppNavigator);
