import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = props => {
  const [state, setState] = useState(null);
  const { options } = props;
  return (
    <View>
      {options.map(item => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                setState(item.key);
              }}
            >
              {state === item.key && <View style={styles.checkedCircle} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center"
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B"
  }
});

export default RadioButton;
