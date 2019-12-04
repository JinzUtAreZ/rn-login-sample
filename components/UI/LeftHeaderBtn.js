import React, { Component } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderBtns from "../../components/UI/HeaderButtons";

const LeftHeaderBtn = props => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderBtns}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          props.navData.navigation.toggleDrawer();
          //props.navData = null;
        }}
      />
    </HeaderButtons>
  );
};

export default LeftHeaderBtn;
