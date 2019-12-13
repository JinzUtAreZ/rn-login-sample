import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

const clickBtnHandler = (e, navi) => {
  //console.log(e.target.title);
  //console.log(navi);
  switch (e) {
    case "ParentChild":
      navi.navigation.navigate("ParentChild");
      break;

    case "RadioButton":
      navi.navigation.navigate("RadioButton");
      break;

    case "MultiCheck":
      navi.navigation.navigate("MultiCheck");
      break;

    case "4":
      this.FOUR();
      break;

    default:
      Alert.alert("NUMBER NOT FOUND");
  }
};

const TestPage = props => {
  return (
    <View style={styles.screen}>
      <Text>TESTING PAGE FOR REACT ELEMENTS</Text>
      <View style={styles.btnContainer}>
        <Button
          color="#DDA0DD"
          title="ParentChild"
          onPress={clickBtnHandler.bind(this, "ParentChild", props)}
        />
        {/* <Button title="News" id={this.props.prop_where_id_is} 
        onPress={() => this.setCategory(this.props.prop_where_id_is)} /> */}
      </View>
      <View style={styles.btnContainer}>
        <Button
          onClick={clickBtnHandler}
          color="#DA70D6"
          title="RadioButton"
          onPress={clickBtnHandler.bind(this, "RadioButton", props)}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onClick={clickBtnHandler}
          color="#FF00FF"
          title="MultiCheck"
          onPress={clickBtnHandler.bind(this, "MultiCheck", props)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    width: "50%",
    margin: 10
  }
});

export default TestPage;
