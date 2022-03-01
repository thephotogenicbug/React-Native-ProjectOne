import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../../Components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color is goin to be equal to 'red', 'green', 'blue' 
    // change === +15, - 15

    if(color === 'red'){
        if(red + change > 255 || red + change < 0){
            return;
        } else{
            setRed(red + change)
        }
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        // onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDrecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        // onDrecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDrecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDrecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
