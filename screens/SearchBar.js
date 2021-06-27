import React from "react";

import { Button, TextInput, View } from "react-native";

import styles from "../styles/searchBarStyles";

import CustomButton from "../components/CustomButton"

const SearchBar = (props) => {
  const { handleChangeText, handleAddItem, inputText } = props;

  return (
    <View style={styles.mainView}>
      <TextInput
        placeholder="Escribe..."
        color="black"
        style={styles.textInputStyles}
        onChangeText={handleChangeText}
        value={inputText}
      />
      <CustomButton style={styles.customButtonStyles}>
        <Button title="+" color="white" onPress={handleAddItem} />
      </CustomButton>
    </View>
  );
};

export default SearchBar;
