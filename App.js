import { StatusBar, Image } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import styles from "./styles/appGeneralStyles";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FoodFeedScreen from "./screens/FoodFeedScreen";
import DrinksFeedScreen from "./screens/DrinksFeedScreen";
import MainScreen from "./screens/MainScreen";
import { navigationRef } from "./navigation/RootNavigation";

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded] = useFonts({
    "PlayfairDisplay-VariableFont": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!dataLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerTitle: () => null }}
            />
            <Stack.Screen
              name="Cafeteria"
              component={DrinksFeedScreen}
              options={{
                title: "Coffee & more",
                headerTitleStyle: {
                  color: "black",
                  fontSize: 30,
                  fontFamily: "PlayfairDisplay-VariableFont",
                },
              }}
            />
            <Stack.Screen
              name="Bakery"
              component={FoodFeedScreen}
              options={{
                headerTitleStyle: {
                  color: "black",
                  fontSize: 30,
                  fontFamily: "PlayfairDisplay-VariableFont",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </View>
    );
  }
}
