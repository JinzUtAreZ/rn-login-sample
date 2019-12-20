import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  Button,
  TextInput
} from "react-native";

import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import { Dropdown } from "react-native-material-dropdown";
import SearchDropDown from "../../components/UI/DropDownSearch";
import RadioButtonGroup from "../../components/UI/RadioButton";
import SelectMultiple from "react-native-select-multiple";
import useForm from "react-hook-form";

import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";

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

  //// for input change handler ////
  const txtChangeHandler = event => {
    console.dir("a", event);
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
  const onSubmit = data => {
    console.log("submit", data);
    //const values = getValues();
    //console.log("get", values);
    //Alert.alert("Form Data", data);
  };

  //// react hook form declaration////
  const { register, setValue, handleSubmit, errors, getValues } = useForm();

  //// for contact input change handler ////

  const [enteredvalue, setEnteredValue] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactVisible, setContactVisible] = useState(false);

  const numberInputHandler = inputText => {
    //console.log(inputText);
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    if (inputText.length > 0 && inputText.length <= 7) {
      setContactError("Please enter a valid no");
      setContactVisible(true);
    } else {
      setContactError("");
      setContactVisible(false);
    }
  };
  //// for contact input change handler ////

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      keyboardVerticalOffset={200}
    >
      <View>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.twocontainer}>
            <View style={styles.item}>
              <View style={styles.inputForm}>
                <Text style={styles.labelStyle}>FirstName</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    ref={register(
                      { name: "firstName" },
                      { required: true, minLength: 2, maxLength: 20 }
                    )}
                    onChangeText={text =>
                      setValue("firstName", text, true, 2, 20)
                    }
                  />
                </View>
                <View style={styles.errorContainer}>
                  {errors.firstName && errors.firstName.type === "required" && (
                    <Text style={styles.errorText}>This is required.</Text>
                  )}
                  {errors.firstName &&
                    errors.firstName.type === "minLength" && (
                      <Text style={styles.errorText}>
                        Minimum 2 characters.
                      </Text>
                    )}
                  {errors.firstName &&
                    errors.firstName.type === "maxLength" && (
                      <Text style={styles.errorText}>Maximum 20 character</Text>
                    )}
                </View>
              </View>
              <View style={styles.inputForm}>
                <Text style={styles.labelStyle}>Email</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    ref={register(
                      { name: "email" },
                      {
                        pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      }
                    )}
                    onChangeText={text => setValue("email", text)}
                  />
                </View>
                <View style={styles.errorContainer}>
                  {errors.email && errors.email.type === "pattern" && (
                    <Text style={styles.errorText}>Wrong email pattern.</Text>
                  )}
                </View>
              </View>

              <View style={styles.inputForm}>
                <Text style={styles.labelStyle}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    ref={register(
                      { name: "password" },
                      { required: true, minLength: 2, maxLength: 10 }
                    )}
                    onChangeText={text =>
                      setValue("password", text, true, 2, 10)
                    }
                    secureTextEntry={hidePassWord}
                  />
                  <View style={styles.iconStyling}>
                    <Icon
                      name="ios-eye"
                      type="ionicon"
                      color="#000"
                      size={30}
                      onPress={clickPassword}
                    />
                  </View>
                </View>
                <View style={styles.errorContainer}>
                  {errors.password && errors.password.type === "required" && (
                    <Text style={styles.errorText}>This is required.</Text>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <Text style={styles.errorText}>Minimum 2 characters.</Text>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <Text style={styles.errorText}>Maximum 10 character</Text>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.inputForm}>
                <Text style={styles.labelStyle}>LastName</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    ref={register(
                      { name: "lastName" },
                      { required: true, minLength: 2, maxLength: 10 }
                    )}
                    onChangeText={text =>
                      setValue("lastName", text, true, 2, 10)
                    }
                  />
                </View>
                <View style={styles.errorContainer}>
                  {errors.lastName && errors.lastName.type === "required" && (
                    <Text style={styles.errorText}>This is required.</Text>
                  )}
                  {errors.lastName && errors.lastName.type === "minLength" && (
                    <Text style={styles.errorText}>Minimum 2 characters.</Text>
                  )}
                  {errors.lastName && errors.lastName.type === "maxLength" && (
                    <Text style={styles.errorText}>Maximum 10 character</Text>
                  )}
                </View>
              </View>

              <View style={styles.inputForm}>
                <Text style={styles.labelStyle}>Contact Number</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    keyboardType="number-pad"
                    value={enteredvalue}
                    onChangeText={numberInputHandler}
                  />
                </View>

                <View style={styles.errorContainer}>
                  {contactVisible && (
                    <Text style={styles.errorText}>{contactError}</Text>
                  )}
                </View>
              </View>

              <View style={styles.inputForm}>
                <Text style={styles.labelStyle}>Retype Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    ref={register(
                      { name: "repassword" },
                      { required: true, minLength: 2, maxLength: 10 }
                    )}
                    onChangeText={text =>
                      setValue("repassword", text, true, 2, 10)
                    }
                    //initialValue={passWord ? passWord : ""}
                    //initialValid={!!passWord}
                    secureTextEntry={hidePassWord}
                  />
                  <View style={styles.iconStyling}>
                    <Icon
                      name="ios-eye"
                      type="ionicon"
                      color="#000"
                      size={30}
                      onPress={clickPassword}
                    />
                  </View>
                </View>
                <View style={styles.errorContainer}>
                  {errors.repassword &&
                    errors.repassword.type === "required" && (
                      <Text style={styles.errorText}>This is required.</Text>
                    )}
                  {errors.repassword &&
                    errors.repassword.type === "minLength" && (
                      <Text style={styles.errorText}>
                        Minimum 2 characters.
                      </Text>
                    )}
                  {errors.repassword &&
                    errors.repassword.type === "maxLength" && (
                      <Text style={styles.errorText}>Maximum 10 character</Text>
                    )}
                </View>
              </View>
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
          <View style={styles.twocontainer}>
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
          <Text>TESTING</Text>
          <TextInput />
        </ScrollView>
        <SearchDropDown
          onTextChange={ParentTextChange}
          onItemSelect={ParentItemSelect}
          selItems={selItems}
        />
      </View>
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
    paddingBottom: 5
  },
  twocontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start" // if you want to fill rows left to right
  },
  item: {
    width: "50%" // is 50% of container width
  },
  selContainer: {
    marginLeft: 10,
    marginRight: 10,
    width: "27%"
  },
  buttonContainer: {
    width: "50%",
    marginTop: 20
  },
  //// for text input ////

  inputStyle: {
    flex: 1,
    fontSize: 20
  },
  formControl: {
    width: "100%"
  },
  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000",
    paddingBottom: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  },
  iconStyling: {
    marginRight: 10,
    marginTop: 5
  },
  labelStyle: {
    fontSize: 18
  },
  inputForm: {
    marginTop: 10,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center"
  },

  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: "red",
    fontSize: 13
  }
});

export default Register;
