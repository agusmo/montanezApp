import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, SafeAreaView } from "react-native";
import styles from "../styles/appGeneralStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FoodFeedScreen from "../screens/FoodFeedScreen";
import DrinksFeedScreen from "../screens/DrinksFeedScreen";
import MainScreen from "../screens/MainScreen";
import { navigationRef } from "../navigation/RootNavigation";
import FoodCategoriesScreen from "../screens/FoodCategoriesScreen";
import DrinksCategoriesScreen from "../screens/DrinksCategoriesScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  const { fontScale } = Dimensions.get("window");

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerTitle: () => null }}
          />
          <Stack.Screen
            name="Bakery Categories"
            component={FoodCategoriesScreen}
            options={{
              title: "Bakery Categories",
              headerTitleStyle: {
                color: "black",
                fontSize: 30 / fontScale,
                fontFamily: "PlayfairDisplay-VariableFont",
              },
            }}
          />
          <Stack.Screen
            name="Cafeteria Categories"
            component={DrinksCategoriesScreen}
            options={{
              title: "Cafeteria Categories",
              headerTitleStyle: {
                color: "black",
                fontSize: 30 / fontScale,
                fontFamily: "PlayfairDisplay-VariableFont",
              },
            }}
          />

          <Stack.Screen
            name="Cafeteria"
            component={DrinksFeedScreen}
            options={{
              title: "Coffee & more",
              headerTitleStyle: {
                color: "black",
                fontSize: 30 / fontScale,
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
                fontSize: 30 / fontScale,
                fontFamily: "PlayfairDisplay-VariableFont",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
