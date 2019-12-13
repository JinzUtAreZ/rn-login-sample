import React, { Component } from "react";
import { View, Text } from "react-native";
import RadioButton from "../Test/RadioButton";

const options = [
  {
    key: "pay",
    text: "Most High Pay"
  },
  {
    key: "performance",
    text: "Most Perfomance"
  },
  {
    key: "aToZ",
    text: "A - Z"
  },
  {
    key: "zToA",
    text: "Z - A"
  }
];

const RBParent = () => {
  return (
    <View>
      <RadioButton options={options} />
    </View>
  );
};

RBParent.navigationOptions = {
  headerTitle: "RADIO BUTTONS SAMPLE"
};

export default RBParent;
