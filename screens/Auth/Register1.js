import React, { useState, useRef } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ScrollView
} from "react-native";
import SearchDropDown from "../../components/UI/DropDownSearch";

//// sample data searchdropdown ////

var selItems = [
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "Java"
  },
  {
    id: 3,
    name: "Ruby"
  },
  {
    id: 4,
    name: "React Native"
  },
  {
    id: 5,
    name: "PHP"
  },
  {
    id: 6,
    name: "Python"
  },
  {
    id: 7,
    name: "Go"
  },
  {
    id: 8,
    name: "Swift"
  }
];

ParentTextChange = text => {
  alert(text);
};

ParentItemSelect = item => {
  alert(JSON.stringify(item));
};

const Register1 = props => {
  return (
    //// kapag nagbaliktad ung scrollview at keyboard pwedeng magscroll
    //// pero masasapawan ung textinput ng keyboard
    <ScrollView keyboardShouldPersistTaps="always">
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        //behavior="padding"
        behavior={"position"}
        enabled
        keyboardVerticalOffset={100}
      >
        {/*  <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Name" style={styles.input} />
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TextInput placeholder="Confrim Password" style={styles.input} />
          <SearchDropDown
            onTextChange={ParentTextChange}
            onItemSelect={ParentItemSelect}
            selItems={selItems}
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
        {/* </TouchableWithoutFeedback>
      </SafeAreaView> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default Register1;
