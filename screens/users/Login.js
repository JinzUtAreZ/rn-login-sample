import React, { useState, useEffect } from "react";
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

import { Button } from 'react-native-elements'; 

import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [buttonWidth, setButtonWidth] = useState();

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
    console.log(buttonWidth);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const buttontext = "New Member \n\n Sign Up"; // line break in button title
  const buttontext1 = "Forgot Email \n\n Password";
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
              <Text style={styles.labelStyle}>Username:</Text>
              <TextInput
                style={styles.inputStyle}
                id="title"
                keyboardType="default"
              />
            </View>

            <View style={styles.inputForm}>
              <Text style={styles.labelStyle}>Password:</Text>
              <TextInput
                style={styles.inputStyle}
                id="title"
                keyboardType="default"
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
              <TouchableOpacity>
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
  labelStyle: {
    fontSize: 18
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
    overflow: "hidden"
  },
  inputForm: {
    margin: 10,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center"
  },
  inputStyle: {
    borderBottomColor: "black",
    borderWidth: 1,
    borderBottomWidth: 2,
    fontSize: 18
  },
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
  }
});
export default Login;
