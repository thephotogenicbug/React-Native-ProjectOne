import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const FlexValues = () => {
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
    // flexDirection: "row",
    alignItems: "center",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 4,
    // alignSelf: "stretch",
    position: "absolute",
    fontSize: 18,
    // bottom: 10,
    left: 10,
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

export default FlexValues;
