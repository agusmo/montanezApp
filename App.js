import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";
import ProductLists from "./screens/ProductFoodList";
import SearchBar from "./screens/SearchBar";
import ModalItem from "./screens/Modal";
import mockData from "./screens/data/FlatlistFoodData";
import styles from "./styles/mainScreenStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function App ({props}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [inputText, setInputText] = useState("");
  const [products, setProducts] = useState(mockData);
  const [dataLoaded]= useFonts({
    'PlayfairDisplay-VariableFont': require('./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
  })




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

  if (!dataLoaded) {
    return <AppLoading />;
  } else {
   return (
    <View style={styles.container} >
      <Header title="Bakery"/>
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
      <Footer text="Footer text"/>
      <StatusBar style="dark" />
    </View>
  );
}
};