import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There !</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
        title="Go to Component Screen"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      {/* <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("List")}
      >
        <Text>Go to List Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    marginBottom:20,
  },
});

export default HomeScreen;
