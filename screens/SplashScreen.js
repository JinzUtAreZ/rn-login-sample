import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
//import { css } from "emotion";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SplashScreen = props => {
  const [splashText, setSplashText] = useState("The StartUp Screen");
  const [splashColor, setSplashColor] = useState(getRandomColor());
  //const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => setSplashText("Hello, Asshole!"), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setSplashColor(getRandomColor()), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () =>
        props.navigation.navigate({
          routeName: "Login"
        }),
      6000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    //// dynamic bgcolor changing ////
    <View style={[styles.screen, { backgroundColor: splashColor }]}>
      <Text style={styles.textStyles}>{splashText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
    //backgroundColor: getRandomColor()
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default SplashScreen;
