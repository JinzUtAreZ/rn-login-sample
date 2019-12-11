import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

const Child = props => {
  return (
    <View>
      <Text>CHILD COMPONENT</Text>
      {/* <Button onPress={props.doWhatEver} title={props.title} /> */}
      <View style={{ marginTop: 20 }}>
        <SearchableDropdown
          onTextChange={props.onTextChange}
          onItemSelect={props.onItemSelect}
          //onTextChange={text => alert(text)}
          //onItemSelect={item => alert(JSON.stringify(item))}
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
      </View>
    </View>
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

export default Child;
