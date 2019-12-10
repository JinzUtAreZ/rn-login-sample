import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import { Dropdown } from "react-native-material-dropdown";
import SearchDropDown from "../../components/UI/DropDownSearch";

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

const Register = props => {
  const [passWord, setPassWord] = useState("");
  const [hidePassWord, sethidePassWord] = useState(true);
  const hideRef = useRef(hidePassWord);
  hideRef.current = hidePassWord;

  //// viewing of password hidden
  const clickPassword = () => {
    //setPassWord(text);
    sethidePassWord(!hidePassWord);
    setTimeout(() => {
      sethidePassWord(!hideRef.current);
      //console.log(hidePassWord, hideRef.current);
      //// kelangan gumamit ng useRef dito para maset ung value
    }, 2000);
  };
  //// end of password hidden

  //// sample data searchdropdown ////

  var items = [
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

  //// sample data searchdropdown ////

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Card style={styles.screen}>
          <View style={styles.item}>
            <Input
              id="title"
              label="FirstName"
              errorText="Please enter a valid title!"
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            <Input
              id="title"
              label="Email"
              errorText="Please enter a valid title!"
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            <Input
              id="txtPass"
              label="Password"
              errorText="Please enter a valid password"
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
              initialValue={passWord ? passWord : ""}
              initialValid={!!passWord}
              required
              secureTextEntry={hidePassWord}
              onPress={clickPassword}
              //onInputChange={txtChangeHandler}
              isVisible
            />
            <Dropdown label="Month" data={getMonths()} />
            <Dropdown label="Day" data={getDays()} />
            <Dropdown label="Year" data={getYears()} />
          </View>
          <View style={styles.item}>
            <Input
              id="title"
              label="LastName"
              errorText="Please enter a valid title!"
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            <Input
              id="title"
              label="Contact Number"
              errorText="Please enter a valid title!"
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            <Input
              id="title"
              label="Retype Password"
              errorText="Please enter a valid title!"
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            <SearchDropDown seldata={items} />
          </View>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Register.navigationOptions = {
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

export default Register;