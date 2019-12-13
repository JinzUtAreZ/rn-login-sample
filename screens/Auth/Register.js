import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text
} from "react-native";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import { Dropdown } from "react-native-material-dropdown";
import SearchDropDown from "../../components/UI/DropDownSearch";
import RadioButtonGroup from "../../components/UI/RadioButton";
import SelectMultiple from "react-native-select-multiple";

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

  var selItems = [
    {
      id: 1,
      name: "TANGA"
    },
    {
      id: 2,
      name: "GAGO"
    },
    {
      id: 3,
      name: "BALIW"
    },
    {
      id: 4,
      name: "SIRAULO"
    },
    {
      id: 5,
      name: "TARANTADO"
    }
  ];

  //// sample data searchdropdown ////

  //// sample data radiobuttons ////
  const options = [
    {
      key: "1",
      text: "Male"
    },
    {
      key: "2",
      text: "Female"
    },
    {
      key: "3",
      text: "Lesbian/Gay"
    }
  ];
  //// sample data radiobuttons ////

  //// sample data checkbox ////
  const shopping = [
    { label: "OLX", value: "1a" },
    { label: "LAZADA", value: "2b" },
    { label: "SHOPEE", value: "3c" }
  ];

  const [selShop, setSelShop] = useState(shopping);
  //// sample data checkbox

  //// for searchable dropdown ////
  ParentTextChange = text => {
    alert(text);
  };

  ParentItemSelect = item => {
    alert(JSON.stringify(item));
  };
  //// for searchable dropdown ////

  //// for multicheckbox ////
  onMultiCheckChange = selectedShop => {
    setSelShop(selectedShop);
  };

  const renderMultiCheckbox = (label, style) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <Image
          style={{ width: 42, height: 42 }}
          source={{ uri: "https://dummyimage.com/100x100/52c25a/fff&text=S" }}
        /> */}
        <View style={{ marginLeft: 10 }}>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    );
  };
  //// for multicheckbox ////

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        //behavior="padding"
        behavior={"position"}
        enabled
        keyboardVerticalOffset={100}
      >
        {/* ung presistTaps may connect sa searchdropdown */}
        {/* <Card style={styles.screen}> */}
        <View style={styles.screen}>
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
              id="txtPass"
              label="Retype Password"
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
          </View>
        </View>
        <View style={styles.screen}>
          <View style={styles.selContainer}>
            <Dropdown label="Month" data={getMonths()} />
          </View>
          <View style={styles.selContainer}>
            <Dropdown label="Day" data={getDays()} />
          </View>
          <View style={styles.selContainer}>
            <Dropdown label="Year" data={getYears()} />
          </View>
        </View>
        <View style={styles.screen}>
          <View style={styles.item}>
            <SelectMultiple
              items={shopping}
              renderLabel={renderMultiCheckbox}
              selectedItems={selShop}
              onSelectionsChange={onMultiCheckChange}
              rowStyle={{
                borderBottomWidth: 0,
                paddingTop: 0,
                paddingBottom: 7
              }}
            />
          </View>
          <View style={styles.item}>
            <RadioButtonGroup options={options} />
          </View>
        </View>
        <View style={(styles.screen, { width: "80%", alignSelf: "center" })}>
          <SearchDropDown
            onTextChange={ParentTextChange}
            onItemSelect={ParentItemSelect}
            selItems={selItems}
          />
        </View>

        {/* </Card> */}
      </KeyboardAvoidingView>
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
    paddingBottom: 5
  },
  item: {
    width: "50%" // is 50% of container width
  },
  selContainer: {
    marginLeft: 10,
    marginRight: 10,
    width: "27%"
  }
});

export default Register;
