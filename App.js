import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MainNavigation from "./navigation/MainNavigation";
import { Provider } from "react-redux"
import store from "./store";

export default function App() {
  const [dataLoaded] = useFonts({
    "PlayfairDisplay-VariableFont": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!dataLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
