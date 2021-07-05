import React from "react";

import { TouchableOpacity, Text, TextInput, View } from "react-native";

import styles from "../styles/searchBarStyles";

import CustomButton from "./CustomButton";

const SearchBar = (props) => {
  const { handleChangeText, handleAddItem, inputText } = props;

  return (
    <View style={styles.mainView}>
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
