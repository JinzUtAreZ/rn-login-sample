import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

const DropDownSearch = props => {
  return (
    <SearchableDropdown
      onTextChange={props.onTextChange}
      onItemSelect={props.onItemSelect}
      containerStyle={styles.container}
      textInputStyle={styles.textInput}
      itemStyle={styles.item}
      itemTextStyle={styles.itemText}
      itemsContainerStyle={styles.itemContainer}
      items={props.selItems}
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
