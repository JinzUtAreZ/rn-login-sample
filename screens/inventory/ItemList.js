import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

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

ItemList.navigationOptions = {
  headerTitle: "List of Inventory Items",
  headerStyle: { backgroundColor: Colors.primaryColor }
  //headerTintColor: Colors.tintedText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default ItemList;
