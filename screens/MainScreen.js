import React from "react";
import { View, TouchableOpacity, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import styles from "../styles/mainScreenStyles";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const MainScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Header
        title="Bienvenidos"/>
      <View>
        <CustomButton style={styles.customButtonStyles}>
          <TouchableOpacity onPress={() => navigation.navigate("Bakery")}>
            <Text style={styles.buttonTextStyles}>Ir a Bakery</Text>
          </TouchableOpacity>
        </CustomButton>
        <CustomButton style={styles.customButtonStyles}>
          <TouchableOpacity onPress={() => navigation.navigate("Cafeteria")}>
            <Text style={styles.buttonTextStyles}>Ir a Cafeteria</Text>
          </TouchableOpacity>
        </CustomButton>
      </View>
    </View>
  );
};

export default MainScreen;
