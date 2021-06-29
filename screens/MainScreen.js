import React from "react";
import { View, Button } from "react-native";
import styles from "../styles/mainScreenStyles";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Bienvenidos" style={styles.header} />
      <View>
        <CustomButton style={styles.customButtonStyles}>
          <Button
            title="Ir a Bakery"
            color="white"
            onPress={() => navigation.navigate("Bakery")}
          />
        </CustomButton>
        <CustomButton style={styles.customButtonStyles}>
          <Button
            title="Ir a Cafetería"
            color="white"
            onPress={() => navigation.navigate("Cafeteria")}
          />
        </CustomButton>
      </View>
    </View>
  );
};

export default MainScreen;
