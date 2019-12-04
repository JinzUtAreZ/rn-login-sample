import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../../constants/Colors";

const Messages = props => {
  return (
    <View style={styles.screen}>
      <Text>Messages Page</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Back to User Info"
        onPress={() => {
          props.navigation.navigate({
            routeName: "UserInfo"
          });
        }}
      />
    </View>
  );
};

Messages.navigationOptions = {
  headerTitle: "Message",
  headerStyle: { backgroundColor: Colors.primaryColor }
  //headerTintColor: Colors.tintedText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Messages;
