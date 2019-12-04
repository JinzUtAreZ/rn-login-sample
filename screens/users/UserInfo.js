import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import CustomHeaderBtns from "../../components/UI/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import LeftHeaderBtn from "../../components/UI/LeftHeaderBtn";
import Colors from "../../constants/Colors";

const UserInfo = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the User info screen</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to Activity Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: "Activity" });
        }}
      />
    </View>
  );
};

UserInfo.navigationOptions = navData => {
  //console.log("info");
  return {
    headerTitle: "USER INFORMATION",
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

export default UserInfo;
