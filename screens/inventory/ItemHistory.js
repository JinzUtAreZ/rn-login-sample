import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemHistory = () => {
  return (
    <View style={styles.screen}>
      <Text>Item History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center"
  }
});

export default ItemHistory;
