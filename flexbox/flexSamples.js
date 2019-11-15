import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const flexSamples = () => {
  // const [screenHeight, setscreenHeight] = useState(
  //   Dimensions.get('window').height
  // );
  // const [scrollable, setscrollable] = useState(false);

  // const onContentChange = (width, height) => {
  //   console.log(screenHeight);
  //   setscreenHeight(height);
  //   console.log(width, height, screenHeight);
  //   const scrollChange = height > screenHeight;
  //   setscrollable(scrollChange);
  // };

  // useEffect(() => {
  //   onContentChange();
  // }, [screenHeight, scrollable]);

  // console.log(height, screenHeight, contentHeight);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        //onContentSizeChange={onContentChange}
        //scrollEnabled={scrollable}
        // onContentSizeChange={(width, height) => {
        //   console.log(width, height, windowheight, 'screen');
        // }}
      >
        {/* <View style={styles.screen}>
          <View style={styles.box1}>
            <Text>1</Text>
          </View>
          <View style={styles.box2}>
            <Text>2</Text>
          </View>
          <View style={styles.box3}>
            <Text>3</Text>
          </View>
        </View>
        <View style={styles.screen2}>
          <View style={styles.box4}>
            <Text>4</Text>
          </View>
          <View style={styles.box5}>
            <Text>5</Text>
          </View>
          <View style={styles.box6}>
            <Text>6</Text>
          </View>
        </View> */}
        <View style={styles.screen3}>
          <View style={styles.box7}>
            <Text>7</Text>
          </View>
          <View style={styles.box8}>
            <Text>8</Text>
          </View>
          <View style={styles.box9}>
            <Text>9</Text>
          </View>
        </View>
        <View style={styles.screen4}>
          <View style={styles.box10}>
            <Text>10</Text>
          </View>
          <View style={styles.box11}>
            <Text>11</Text>
          </View>
          <View style={styles.box12}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    flexGrow: 1
  },
  screen: {
    padding: 30,
    flexDirection: 'row'
  },
  box1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: 'blue',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: 'green',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen2: {
    padding: 30,
    flexDirection: 'row-reverse',
    height: '25%'
  },
  box4: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box5: {
    backgroundColor: 'blue',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box6: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen3: {
    padding: 30,
    flexDirection: 'column',
    height: 250
  },
  box7: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'space-between'
  },
  box8: {
    backgroundColor: 'blue',
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  box9: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  screen4: {
    padding: 30,
    flexDirection: 'column-reverse',
    height: '100%'
  },
  box10: {
    backgroundColor: 'red',
    height: 100,
    justifyContent: 'space-evenly'
  },
  box11: {
    backgroundColor: 'blue',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  box12: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default flexSamples;
