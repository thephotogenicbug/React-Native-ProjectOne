import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsScreen from "./src/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Main" component={ComponentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
