import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderBtns from "../../components/UI/HeaderButtons";
import Colors from "../../constants/Colors";
import LeftHeaderBtn from "../../components/UI/LeftHeaderBtn";

const UserList = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the UserList Page</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to Information"
        onPress={() => {
          props.navigation.navigate({
            routeName: "UserInfo"
          });
        }}
      />
    </View>
  );
};

UserList.navigationOptions = navData => {
  //console.log("list");
  return {
    headerTitle: "USER LIST",
    headerLeft: <LeftHeaderBtn navData={navData} />
    // headerLeft: (
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderBtns}>
    //     <Item
    //       title="Menu"
    //       iconName="ios-menu"
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // )
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default UserList;
