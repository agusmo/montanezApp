import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import styles from "../styles/mainScreenStyles"
import Colors from "../constants/colors";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Bienvenidos" style={styles.header} />
      <View>
      <CustomButton style={styles.customButtonStyles}>
        <Button title="Ir a Bakery" color="white" />
      </CustomButton>
      <CustomButton style={styles.customButtonStyles}>
        <Button title="Ir a Cafetería" color="white" />
      </CustomButton>
      </View>
    </View>
  );
};



export default MainScreen;
