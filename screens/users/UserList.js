import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../../constants/Colors";

const UserList = props => {
  return (
    <View style={styles.screen}>
      <Text>UserList Page</Text>
      <Button
        color={Colors.tertiaryColor}
        title="Go to UserList"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Activity"
          });
        }}
      />
    </View>
  );
};

UserList.navigationOptions = {
  headerTitle: "Statistics",
  headerStyle: { backgroundColor: Colors.primaryColor }
  //headerTintColor: Colors.tintedText
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30
  }
});

export default UserList;
