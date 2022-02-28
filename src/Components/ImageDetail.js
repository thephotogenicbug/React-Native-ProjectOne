import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  console.log(imageSource);
  return (
    <View>
      <Image source={imageSource} />
      {/* <Image source={require("../../assets/beach.jpg")} /> */}
      <Text>{title}</Text>
      <Text>Image Scrore - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
