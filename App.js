import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles/appGeneralStyles";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import FoodFeedScreen from "./screens/FoodFeedScreen";
import DrinksFeedScreen from "./screens/DrinksFeedScreen";
import MainScreen from "./screens/MainScreen"

export default function App({ props }) {
  const [dataLoaded] = useFonts({
    "PlayfairDisplay-VariableFont": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });
  if (!dataLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {/* <MainScreen /> */}
        {/* <FoodFeedScreen /> */}
        <DrinksFeedScreen />
        <StatusBar style="dark" />
      </View>
    );
  }
}
