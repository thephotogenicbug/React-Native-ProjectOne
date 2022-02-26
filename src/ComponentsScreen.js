import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentsScreen = () => {
  const name = "Naveen";
  return (
    <View>
      <Text style={styles.textStyle}>Get Started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
      <Button title="Go to Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28,
    marginBottom: 20,
  },
  subHeaderStyle: {
    fontSize: 20,
    marginBottom: 25,
  },
});

export default ComponentsScreen;
