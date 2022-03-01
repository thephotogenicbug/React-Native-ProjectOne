import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsScreen from "./src/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/StateComponent/StateOne";
import ColorScreen from "./src/screens/StateComponent/StateTwo";
import SquareScreen from "./src/screens/StateComponent/StateThree";
import TextScreen from "./src/screens/StateComponent/StateFour";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={ComponentsScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="StateOne" component={CounterScreen} />
        <Stack.Screen name="StateTwo" component={ColorScreen} />
        <Stack.Screen name="StateThree" component={SquareScreen} />
        <Stack.Screen name="StateFour" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
