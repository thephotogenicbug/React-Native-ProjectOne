import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi There !</Text>
      <Button
        style={styles.button}
        onPress={() => console.log("Button Pressed")}
        title="Go to Component Screen"
      />
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => console.log("List Pressed")}
      >
        <Text>Go to List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  touchable: {
    marginTop: 20,
  },
});

export default HomeScreen;
