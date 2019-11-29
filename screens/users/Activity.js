import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../../constants/Colors";

const Activity = props => {
  return (
    <View>
      <Text>Activity Page</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to Statistics"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Statistics"
          });
        }}
      />
    </View>
  );
};

Activity.navigationOptions = {
  headerTitle: "Statistics",
  headerStyle: { backgroundColor: Colors.primaryColor }
  //headerTintColor: Colors.tintedText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Activity;
