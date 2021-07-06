import React, { useEffect, useState } from "react";

import { TouchableOpacity, Text, TextInput, View, Dimensions } from "react-native";

import styles from "../styles/searchBarStyles";

import CustomButton from "./CustomButton";

const SearchBar = (props) => {
  const { handleChangeText, handleAddItem, inputText } = props;

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
    <View    style={isPortrait ? styles.mainView : styles.mainViewLandscape}>
      <TextInput
        placeholder="Escribe..."
        color="black"
        style={styles.textInputStyles}
        onChangeText={handleChangeText}
        autoCorrect={false}
        onEndEditing={() => handleAddItem()}
        value={inputText}
      />
        <CustomButton style={styles.customButtonStyles}>
          <TouchableOpacity onPress={handleAddItem}>
            <Text style={styles.buttonTextStyles}>+</Text>
          </TouchableOpacity>
        </CustomButton>
      
    </View>
  );
};

export default SearchBar;
