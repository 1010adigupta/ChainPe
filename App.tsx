import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import { Web3AuthModal } from "./utils/auth/web3Provider";
import "./shim.js";
import { getBalance, sendPayment } from "./utils/auth/ethersRPC";
import React, { useEffect } from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthPage from "./screens/AuthPage/registerPage";
import Landing from "./screens/Landing/landing";
import LoadingScreen from "./screens/LoadingScreen/loadingScreen";
import LoginPage from "./screens/LoginPage/loginPage";
import PaymentFirst from "./screens/Payment/paymentFirst";
import PaymentSecond from "./screens/Payment/paymentSecond";
import SuccessScreen from "./screens/SuccessScreen/successScreen";
import Scanner from "./screens/Scanner";
import CreatePersonalAccount from "./screens/CreatePersonalAcc/createPersonalAccount";
import Dashboard from "./screens/Dashboard/Dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="AuthPage" component={AuthPage} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePersonalAccount" component={CreatePersonalAccount} options={{ headerShown: false }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentFirst" component={PaymentFirst} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentSecond" component={PaymentSecond} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
