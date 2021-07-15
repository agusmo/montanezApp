import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  const [dataLoaded] = useFonts({
    "PlayfairDisplay-VariableFont": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!dataLoaded) {
    return <AppLoading />;
  } else {
    return (
      <MainNavigation />
    );
  }
}
