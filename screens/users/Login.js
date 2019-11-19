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

const Login = () => {
  const [buttonWidth, setButtonWidth] = useState();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [hidePassWord, sethidePassWord] = useState(true);
  const hideRef = useRef(hidePassWord);
  hideRef.current = hidePassWord;

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

  const buttontext = "New Member \n\n Sign Up"; // line break in button title
  const buttontext1 = "Forgot Email \n\n Password";

  const FORM_INPUT_CHANGE = "FORM_INPUT_CHANGE";
  const formReducer = (state, action) => {
    if (action.type === "FORM_INPUT_CHANGE") {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValid = {
        ...state.inputValids,
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
    inputValues: {
      userName: "",
      passWord: ""
    },
    inputValids: {
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

  const dispatch = useDispatch();

  const signupHandler = () => {
    console.log(formState.inputValues.userName, formState.inputValues.passWord);
    dispatch(
      authActions.addUser(
        formState.inputValues.userName,
        formState.inputValues.passWord
      )
    );
  };

  const clickPassword = () => {
    //setPassWord(text);
    sethidePassWord(!hidePassWord);
    setTimeout(() => {
      sethidePassWord(!hideRef.current);
      //console.log(hidePassWord, hideRef.current);
      //// kelangan gumamit ng useRef dito para maset ung value
    }, 2000);
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
                secureTextEntry
                onInputChange={txtChangeHandler}
                initialValue={passWord ? passWord : ""}
                initialValid={!!passWord}
                required
              />
            </View>

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry={hidePassWord}
                placeholder="Password"
              />
              <Icon
                name="ios-eye"
                type="ionicon"
                color="#000"
                size={20}
                onPress={clickPassword}
              />
            </View>
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity>
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
            <View style={styles.fakeButtonContainer}>
              <TouchableOpacity onPress={signupHandler}>
                <Text style={styles.fakeButtonText}>
                  NEW MEMBER {"\n"} {`   `}SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.fakeButtonContainer}>
              <TouchableOpacity>
                <Text style={styles.fakeButtonText}>
                  FORGOT EMAIL {"\n"} {` `}PASSWORD
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={{ width: buttonWidth }}>
              <Button buttonStyle={styles.buttonDesign} title={buttontext} />
            </View>
            <View style={{ width: buttonWidth }}>
              <Button buttonStyle={styles.buttonDesign} title={buttontext1} />
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    height: Dimensions.get("window").height
  },
  // labelStyle: {
  //   fontSize: 18
  // },
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
    overflow: "hidden"
  },
  // inputForm: {
  //   margin: 10,
  //   width: "80%",
  //   justifyContent: "center",
  //   alignSelf: "center"
  // },
  // inputStyle: {
  //   borderBottomColor: "black",
  //   borderWidth: 1,
  //   borderBottomWidth: 2,
  //   fontSize: 18
  // },
  imageContainer: {
    marginTop: 20,
    width: "100%",
    height: "15%"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonDesign: {
    borderRadius: 10,
    backgroundColor: "olive"
  },
  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
    margin: 10
  },
  inputStyle: {
    flex: 1
    // borderBottomColor: "black",
    // borderWidth: 1,
    // borderBottomWidth: 2,
    // fontSize: 18
  }
});
export default Login;
