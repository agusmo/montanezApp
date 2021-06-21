import React from "react";

import { Button, TextInput, View } from "react-native";

import styles from "../styles/searchBarStyles"

const SearchBar = (props) => {
  const { handleChangeText, handleAddItem, inputText } = props;

  return (
    <View style={styles.mainView}>
      <TextInput
        placeholder="Write here..."
        color="black"
        style={styles.textInputStyles}
        onChangeText={handleChangeText}
        value={inputText}
      />
      <View style={styles.inputButton}>
        <Button title="Add" color="black" onPress={handleAddItem} />
      </View>
    </View>
  );
};

 
export default SearchBar