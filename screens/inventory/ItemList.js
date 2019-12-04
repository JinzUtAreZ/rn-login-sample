import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtns from "../../components/UI/HeaderButtons";

import Colors from "../../constants/Colors";

const ItemList = props => {
  return (
    <View>
      <Text>ItemList</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to Item Creation"
        onPress={() => {
          props.navigation.navigate({
            routeName: "ItemData"
          });
        }}
      />
    </View>
  );
};

ItemList.navigationOptions = navData => {
  return {
    headerTitle: "INVENTORY LIST",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderBtns}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default ItemList;
