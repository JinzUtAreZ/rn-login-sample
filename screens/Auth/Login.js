import React, {
  useState,
  useEffect,
  useReducer,
  useCallback,
  useRef
} from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from "react-native";

import { Button, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../../components/UI/Input";

import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/authActions";

import { useNavigation } from "@react-navigation/core";

const Login = props => {
  const [buttonWidth, setButtonWidth] = useState();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [hidePassWord, sethidePassWord] = useState(true);
  const hideRef = useRef(hidePassWord);
  hideRef.current = hidePassWord;

  //// orientation of layout and buttons ////
  useEffect(() => {
    const updateLayout = () => {
      let deviceWidth = Dimensions.get("window").width;
      if (deviceWidth <= 400) {
        setButtonWidth(deviceWidth * 0.35);
      } else {
        setButtonWidth(deviceWidth * 0.4);
      }
    };
    Dimensions.addEventListener("change", updateLayout);
    //console.log(buttonWidth);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  //// end of orientation

  const buttontext = "New Member \n\n Sign Up"; // line break in button title
  const buttontext1 = "Forgot Email \n\n Password";

  //// universal text input data with validation in Input.js
  //// need to improve the code!!!
  const FORM_INPUT_CHANGE = "FORM_INPUT_CHANGE";
  const formReducer = (state, action) => {
    //console.log("formReducer", state, action);
    if (action.type === "FORM_INPUT_CHANGE") {
      const updatedValues = {
        ...state.inputValue,
        [action.input]: action.value
      };
      const updatedValid = {
        ...state.inputValid,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValid) {
        updatedFormIsValid = updatedFormIsValid && updatedValid[key];
      }

      return {
        ...state,
        formIsValid: updatedFormIsValid,
        inputValues: updatedValues,
        inputValids: updatedValid
      };
    }
    return state;
  };

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValue: {
      userName: "",
      passWord: ""
    },
    inputValid: {
      userName: false,
      passWord: false
    },
    formIsValid: false
  });

  const txtChangeHandler = useCallback(
    (inputName, inputValue, inputValid) => {
      console.log("dispatch", inputValue, inputValid, inputName);

      dispatchFormState({
        type: FORM_INPUT_CHANGE,
        value: inputValue,
        isValid: inputValid,
        input: inputName
      });
    },
    [dispatchFormState]
  );
  //// end of text input

  const dispatch = useDispatch();

  //// signing new users to the app

  const signupHandler = () => {
    props.navigation.navigate("Register");
    // dispatch(
    //   authActions.addUser(
    //     formState.inputValues.userName,
    //     formState.inputValues.passWord
    //   )s
    // );
  };
  //// end of new users to the app

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

  const loginHandler = () => {
    console.log("TAE");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/download.jpg")}
            fadeDuration={1000}
            style={styles.image}
          />
        </View>
        <LinearGradient colors={["rgba(0,0,0,0.3)", "transparent"]}>
          <View>
            <View style={styles.inputForm}>
              <Input
                id="txtUser"
                label="Username"
                errorText="Please enter a valid username"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                style={styles.inputStyle}
                id="txtUser"
                onInputChange={txtChangeHandler}
                initialValue={userName ? userName : ""}
                initialValid={!!userName}
                required
              />
              <Input
                id="txtPass"
                label="Password"
                errorText="Please enter a valid password"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                style={styles.inputStyle}
                id="txtPass"
                //secureTextEntry
                onInputChange={txtChangeHandler}
                initialValue={passWord ? passWord : ""}
                initialValid={!!passWord}
                required
                secureTextEntry={hidePassWord}
                onPress={clickPassword}
                isVisible
              />
            </View>
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={loginHandler}>
              <Text style={styles.fakeButtonLogin}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.welcomeMsg}>
              <Text style={styles.msgTxt}>
                {`           `}Welcome !!!{"\n"}
                Don't Delay Do it Today.
              </Text>
            </View>
          </View>
          <View style={styles.optionsLoginContainer}>
            <View style={(styles.fakeButtonContainer, { width: buttonWidth })}>
              <TouchableOpacity onPress={signupHandler}>
                <Text style={styles.fakeButtonText}>
                  NEW MEMBER {"\n"} {`   `}SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
            <View style={(styles.fakeButtonContainer, { width: buttonWidth })}>
              <TouchableOpacity>
                <Text style={styles.fakeButtonText}>
                  FORGOT EMAIL {"\n"} {` `}PASSWORD
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  loginContainer: {
    padding: 10,
    margin: 10,
    alignItems: "stretch",
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "olive",
    borderRadius: 10,
    overflow: "hidden",
    width: "76%"
  },
  fakeButtonLogin: {
    alignSelf: "center",
    color: "white",
    fontSize: 18
  },
  optionsLoginContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  welcomeMsg: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  msgTxt: {
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  fakeButtonContainer: {
    alignItems: "center"
  },
  fakeButtonText: {
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
    backgroundColor: "darkolivegreen",
    color: "white",
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center"
  },
  imageContainer: {
    marginTop: 20,
    width: "100%",
    height: 100
  },
  image: {
    width: "100%",
    height: "100%"
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
  inputForm1: {
    width: "80%",
    justifyContent: "center",
    alignSelf: "center"
  }
});
export default Login;
