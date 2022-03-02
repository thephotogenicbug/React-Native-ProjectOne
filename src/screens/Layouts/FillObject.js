import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const FillObject = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "orange",
    fontSize: 18,
    position: "absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 2,
  },
});

/*
  Parent Element
  alignItems
  justifyContent
  flexDirection

  Child
  flex
  alignSelf
*/

export default FillObject;
