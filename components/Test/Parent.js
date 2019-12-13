import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Child from "../Test/Child";

var selItems = [
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

const Parent = () => {
  const [titlename, setTitlename] = useState("CRAP");
  const [isBool, setIsBool] = useState(false);

  changeTheWorld = newTitle => {
    if (isBool) {
      newTitle = "MegaCrap";
    } else {
      newTitle = "CrapShit";
    }
    //console.log(isBool);
    setIsBool(!isBool);
    setTitlename(newTitle);
  };

  ParentTextChange = text => {
    alert(text);
  };

  ParentItemSelect = item => {
    alert(JSON.stringify(item));
  };

  return (
    <View>
      <Text>PARENT</Text>
      {/* <Child doWhatEver={changeTheWorld} title={titlename} /> */}
      <Child
        onTextChange={ParentTextChange}
        title={titlename}
        onItemSelect={ParentItemSelect}
        selItems={selItems}
      />
    </View>
  );
};

Parent.navigationOptions = {
  headerTitle: "PARENT CHILD PROPS"
};

const styles = StyleSheet.create({});

export default Parent;
