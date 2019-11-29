import React from "react";
import { Platform, Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/users/Login";
import ItemListScreen from "../screens/inventory/ItemList";
import ItemDataScreen from "../screens/inventory/ItemCreation";
import ItemReportScreen from "../screens/inventory/ItemReport";
import ItemHistoryScreen from "../screens/inventory/ItemHistory";

import StatisticScreen from "../screens/users/Statistics";
import ActivityScreen from "../screens/users/Activity";
import UserListScreen from "../screens/users/UserList";

import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import SideBar from "../components/UI/Sidebar";

///// IMPORTANT REMINDERS //////
/// Remember laging may sequence na subpages muna at nasa ilalim
/// ung main pages

// const AuthStack = createStackNavigator({
//   Landing: {
//     screen: SplashScreen,
//     navigationOptions: {
//       headerTitle: "Landing"
//     }
//   },
//   SignIn: {
//     screen: SplashScreen,
//     navigationOptions: {
//       headerTitle: "Sign In"
//     }
//   },
//   CreateAccount: {
//     screen: SplashScreen,
//     navigationOptions: {
//       headerTitle: "Create Account"
//     }
//   },
//   ForgotPassword: {
//     screen: SplashScreen,
//     navigationOptions: {
//       headerTitle: "Forgot Password"
//     }
//   }
// });

// const defaultNavOptions = {
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
//   },
//   headerTintColor: Platform.OS === "android" ? "white" : Colors.tintedText
// };

// const ItemNavigator = createStackNavigator(
//   {
//     ItemList: ItemListScreen,
//     ItemCreate: ItemDataScreen,
//     ItemData: ItemDataScreen,
//     ItemHistory: ItemHistoryScreen
//   }
//   //{ defaultNavigationOptions: defaultNavOptions }
// );

// const MainTabs = createMaterialBottomTabNavigator(
//   {
//     List: {
//       screen: ItemListScreen,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return (
//             <FontAwesome name={"list"} size={25} color={tabInfo.tintColor} />
//           );
//         },
//         //tabBarColor: Colors.primaryColor,
//         tabBarLabel: "LIST OF ITEMS",
//         tabBarOptions: {
//           activeTintColor: "white"
//         }
//       }
//     },
//     History: {
//       screen: ItemHistoryScreen,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return (
//             <FontAwesome name={"history"} size={25} color={tabInfo.tintColor} />
//           );
//         },
//         //tabBarColor: Colors.accentColor,
//         tabBarLabel: "HISTORY",
//         tabBarOptions: {
//           activeTintColor: "white"
//         }
//       }
//     },
//     Report: {
//       screen: ItemReportScreen,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return (
//             <FontAwesome
//               name={"file-text-o"}
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         }
//       },
//       tabBarLabel: "REPORT",
//       tabBarOptions: {
//         activeTintColor: "white"
//       }
//     }
//   },
//   {
//     activeColor: "lime",
//     inactiveColor: "silver",
//     shifting: true,
//     barStyle: {
//       backgroundColor: Colors.tertiaryColor
//     }
//   }
// );

const DrawerNavigator = createDrawerNavigator(
  {
    UserList: {
      screen: UserListScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        )
      }
    },
    Activity: {
      screen: ActivityScreen,
      navigationOptions: {
        title: "Messages",
        drawerIcon: ({ tintColor }) => (
          <Feather name="message-square" size={16} color={tintColor} />
        )
      }
    },
    Statistic: {
      screen: StatisticScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="activity" size={16} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get("window").width * 0.85,
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

// const AppNavigator = createSwitchNavigator({
//   Loading: SplashScreen,
//   Auth: AuthStack,
//   App: MainTabs,
//   Inventory: ItemNavigator
// });

export default createAppContainer(DrawerNavigator);
