import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          // item === {name:"Friend #1"}
          return <Text style={styles.textSize}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textSize: {
    fontSize: 20,
  },
});

export default ListScreen;
