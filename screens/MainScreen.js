import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import styles from "../styles/mainScreenStyles";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

const MainScreen = ({ navigation }) => {
   
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  }

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait);
    setIsPortrait(onPortrait());

    return () => {
      Dimensions.removeEventListener('change', statePortrait);
    }
  }, []);

  return (
    <View style={isPortrait ? styles.container : styles.containerLandscape}>
      <Header title="Bienvenidos" />
      <View>
        <CustomButton
          style={
            isPortrait ? styles.customButtonStyles : styles.customButtonStylesLS
          }
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Bakery Categories")}
          >
            <Text style={styles.buttonTextStyles}>Ir a Bakery</Text>
          </TouchableOpacity>
        </CustomButton>
        <CustomButton
          style={
            isPortrait ? styles.customButtonStyles : styles.customButtonStylesLS
          }
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Cafeteria Categories")}
          >
            <Text style={styles.buttonTextStyles}>Ir a Cafeteria</Text>
          </TouchableOpacity>
        </CustomButton>
      </View>
    </View>
  );
};

export default MainScreen;
