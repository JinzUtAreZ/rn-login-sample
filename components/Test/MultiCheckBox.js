import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import SelectMultiple from "react-native-select-multiple";

const fruits = ["Apples", "Oranges", "Pears"];
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 42, height: 42 }}
        source={{ uri: "https://dummyimage.com/100x100/52c25a/fff&text=S" }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
};

const MultiCheckBox = () => {
  const [selFruits, setSelFruits] = useState(fruits);

  onSelectionsChange = selectedFruits => {
    // selectedFruits is array of { label, value }
    //this.setState({ selectedFruits })
    setSelFruits(selectedFruits);
  };

  return (
    <View>
      <SelectMultiple
        items={fruits}
        renderLabel={renderLabel}
        selectedItems={selFruits}
        onSelectionsChange={onSelectionsChange}
      />
    </View>
  );
};

MultiCheckBox.navigationOptions = {
  headerTitle: "MULTI CHECKBOX SAMPLE"
};

const styles = StyleSheet.create({});

export default MultiCheckBox;
