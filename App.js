import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsScreen from "./src/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={ComponentsScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
