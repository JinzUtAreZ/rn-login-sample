import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const ItemReport = () => {
  return (
    <View style={styles.screen}>
      <Text>ITEM REPORT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20
  }
});

export default ItemReport;
