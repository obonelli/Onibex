import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import CreateCase from "./screens/CreateCaseScreen";
import Customers from "./screens/CustomersScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
//import "./tailwind.css";

const Stack = createStackNavigator();

const globalScreenOptions = {
  flex: 0.2,
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleContainerStyle: {
    flex: 0.2,
    justifyContent: "center", // THIS RIGHT HERE
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateCase" component={CreateCase} />
        <Stack.Screen name="Customers" component={Customers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
