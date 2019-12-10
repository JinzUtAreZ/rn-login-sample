import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

var items = [
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

const DropDownSearch = () => {
  //console.log(items);
  return (
    <SearchableDropdown
      onTextChange={text => alert(text)}
      onItemSelect={item => alert(JSON.stringify(item))}
      containerStyle={styles.container}
      textInputStyle={styles.textInput}
      itemStyle={styles.item}
      itemTextStyle={styles.itemText}
      itemsContainerStyle={styles.itemContainer}
      items={items}
      defaultIndex={0}
      placeholder="Please select"
      resetValue={false}
      underlineColorAndroid="transparent"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  textInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  item: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#ddd",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5
  },
  itemText: {
    color: "#222"
  },
  itemContainer: {
    maxHeight: 140
  }
});

export default DropDownSearch;
