import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There !</Text>
      <Button
        onPress={() => navigation.navigate("Main")}
        title="Go to Component Screen"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("ImageScreen")}
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
});

export default HomeScreen;
