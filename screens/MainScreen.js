import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import styles from "../styles/mainScreenStyles";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Bienvenidos" style={styles.header} />
      <View>
        <CustomButton style={styles.customButtonStyles}>
          <TouchableOpacity onPress={() => navigation.navigate("Bakery")} >
             <Text style={styles.buttonTextStyles}>
              Ir a Bakery
            </Text>
          </TouchableOpacity>
        </CustomButton>
        <CustomButton style={styles.customButtonStyles}>
        <TouchableOpacity onPress={() => navigation.navigate("Cafeteria")} >
             <Text style={styles.buttonTextStyles}>
              Ir a Cafeteria
            </Text>
          </TouchableOpacity>
        </CustomButton>
      </View>
    </View>
  );
};

export default MainScreen;
