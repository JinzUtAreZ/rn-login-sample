import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../../constants/Colors";

const Statistics = props => {
  return (
    <View>
      <Text>Statistics Page</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to Activity"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Activity"
          });
        }}
      />
    </View>
  );
};

Statistics.navigationOptions = {
  headerTitle: "Statistics",
  headerStyle: { backgroundColor: Colors.primaryColor }
  //headerTintColor: Colors.tintedText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Statistics;
