import React, { useState, useRef } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import { Dropdown } from "react-native-material-dropdown";

function getMonth() {
  var monthnum = [];
  for (var i = 1; i <= 12; i++) {
    monthnum.push({ value: i });
    //console.log(i);
  }
  //console.log(monthnum);
  return monthnum;
}

const Register = props => {
  const [passWord, setPassWord] = useState("");
  const [hidePassWord, sethidePassWord] = useState(true);
  const hideRef = useRef(hidePassWord);
  hideRef.current = hidePassWord;

  const monthdata = useRef(getMonth());

  let data = [
    {
      value: "Banana"
    },
    {
      value: "Mango"
    },
    {
      value: "Pear"
    }
  ];

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

  return (
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
          <Dropdown label="Month" data={getMonth()} />
          <Dropdown label="Day" data={data} />
          <Dropdown label="Year" data={data} />
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
        </View>
      </Card>
    </ScrollView>
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
