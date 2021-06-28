import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/mainScreenStyles"
import Colors from "../constants/colors";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const MainScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Header title="Bienvenidos" style={styles.header} />
      <View>
      <CustomButton style={styles.customButtonStyles}>
        <Button title="Ir a Bakery" color="white" onPress={() => navigation.navigate('Bakery')}/>
      </CustomButton>
      <CustomButton style={styles.customButtonStyles}>
        <Button title="Ir a Cafetería" color="white" onPress={() => navigation.navigate('Cafeteria')}/>
      </CustomButton>
      </View>
    </View>
  );
};



export default MainScreen;
