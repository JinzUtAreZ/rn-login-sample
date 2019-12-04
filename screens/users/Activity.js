import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../../constants/Colors";

const Activity = props => {
  return (
    <View style={styles.screen}>
      <Text>This is Your Activity Page</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to Messages"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Messages"
          });
        }}
      />
    </View>
  );
};

Activity.navigationOptions = {
  headerTitle: "Activity",
  headerStyle: { backgroundColor: Colors.primaryColor }
  //headerTintColor: Colors.tintedText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Activity;
