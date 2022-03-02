import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View styles={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Model Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "orange",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    margin: 20,
  },
});
export default BoxScreen;
