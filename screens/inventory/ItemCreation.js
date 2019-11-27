import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemCreation = props => {
  return (
    <View style={styles.screen}>
      <Text>ItemCreation</Text>
    </View>
  );
};

ItemCreation.navigationOptions = {
  headerTitle: "New Inventory"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default ItemCreation;
