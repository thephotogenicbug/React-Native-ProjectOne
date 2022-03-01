import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <View>
      <Text style={{ top: 25, left: 35 }}>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />

      {/* {true ? <Text>That was True</Text> : null} */}
      <Text style={{ top: -15, left: 35 }}>Enter Password</Text>
      <TextInput
        style={styles.input1}
        autoCapitalize="none"
        autoCorrect={false}
        value={Password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {/* <Text>My Name is {name}</Text> */}
      {Password.length < 4 ? (
        <Text style={{ textAlign: "center", top:-50 }}>
          Password must be 4 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 35,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
  input1: {
    margin: 35,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    top: -40
  },
});

export default TextScreen;
