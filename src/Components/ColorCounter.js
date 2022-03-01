import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDrecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      {/* // String templating */}
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDrecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
