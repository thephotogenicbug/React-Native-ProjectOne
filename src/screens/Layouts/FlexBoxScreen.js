import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const FlexBoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 70,
    // margin: 10,
     padding: 20,
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

export default FlexBoxScreen;
