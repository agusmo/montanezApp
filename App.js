import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles/appGeneralStyles";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodFeedScreen from "./screens/FoodFeedScreen";
import DrinksFeedScreen from "./screens/DrinksFeedScreen";
import MainScreen from "./screens/MainScreen"

const Stack = createStackNavigator();

export default function App({ props }) {
  const [dataLoaded] = useFonts({
    "PlayfairDisplay-VariableFont": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });
  if (!dataLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
            <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Cafeteria" component={DrinksFeedScreen} />
        <Stack.Screen name="Bakery" component={FoodFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
        <StatusBar style="dark" />
      </View>
    );
  }
}


   {/* <MainScreen /> */}
        {/* <FoodFeedScreen /> */}
        {/* <DrinksFeedScreen /> */}