import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import SearchDropDown from "../../components/UI/DropDownSearch";
import { Dropdown } from "react-native-material-dropdown";
import Card from "../../components/UI/Card";

function getMonths() {
  var monthnum = [];
  for (var i = 1; i <= 12; i++) {
    monthnum.push({ value: i });
    //console.log(i);
  }
  //console.log(monthnum);
  return monthnum;
}

function getDays() {
  var daynum = [];
  for (var i = 1; i <= 31; i++) {
    daynum.push({ value: i });
  }

  return daynum;
}

function getYears() {
  var yearnum = [];
  var yearnow = new Date().getFullYear(); //Current Year
  for (var i = 1950; i <= yearnow; i++) {
    yearnum.push({ value: i });
  }

  return yearnum;
}

const Register1 = props => {
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

  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.item}>
          <Dropdown label="Month" data={getMonths()} />
          <Dropdown label="Day" data={getDays()} />
          <Dropdown label="Year" data={getYears()} />
        </View>
        <View style={styles.item}>
          <SearchDropDown
            onTextChange={ParentTextChange}
            onItemSelect={ParentItemSelect}
            selItems={selItems}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Register1.navigationOptions = {
  headerTitle: "REGISTER"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
    padding: 5,
    paddingBottom: 30
  },
  item: {
    width: "50%" // is 50% of container width
  }
});

export default Register1;
