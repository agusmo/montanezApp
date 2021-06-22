import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";
import ProductLists from "./screens/ProductList";
import SearchBar from "./screens/SearchBar";
import ModalItem from "./screens/Modal";
import mockData from "./screens/data/FlatlistData";
import styles from "./styles/mainScreenStyles";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [inputText, setInputText] = useState("");
  const [products, setProducts] = useState(mockData);

  const handleChangeText = (text) => {
    setInputText(text);
  };

  const handleAddItem = () => {
    if (inputText) {
      setProducts([
        ...products,
        {
          id: Math.random().toString(),
          name: inputText,
          description: "Este producto no posee descripción",
          price: "$" + Math.round(Math.random() * 10),
        },
      ]);
    }
    setInputText("");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setItemSelected({});
  };

  const handleModal = (id) => {
    console.log(products);
    setItemSelected(products.find((item) => item.id === id));
    setModalVisible(true);
  };

  const handleDeleteItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bakery</Text>
      <SearchBar
        handleChangeText={handleChangeText}
        inputText={inputText}
        handleAddItem={handleAddItem}
      />
      <ProductLists
        handleModal={handleModal}
        products={products}
        handleDeleteItem={handleDeleteItem}
        itemSelected={itemSelected}
      />
      <ModalItem
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleCloseModal={handleCloseModal}
      />
      <StatusBar style="dark" />
    </View>
  );
}
