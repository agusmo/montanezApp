import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ProductLists from "../components/ProductFlatListFood";
import * as RootNavigation from "../navigation/RootNavigation";
import SearchBar from "../components/SearchBar";
import ModalItem from "./Modal";
import mockData from "./data/FlatlistFoodData";
import styles from "../styles/appGeneralStyles";
import Footer from "../components/Footer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";


export default function FoodFeedScreen({ props, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [inputText, setInputText] = useState("");
  const [products, setProducts] = useState(mockData);

  const [dataLoaded] = useFonts({
    "PlayfairDisplay-VariableFont": require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

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

  const handleDeleteItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setItemSelected({});
  };

  const handleModal = (id) => {
    setItemSelected(products.find((item) => item.id === id));
    setModalVisible(true);
  };

  if (!dataLoaded) {
    return <AppLoading />;
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <SearchBar
              handleChangeText={handleChangeText}
              inputText={inputText}
              handleAddItem={handleAddItem}
            />

            <ProductLists
              route={route}
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
            <Footer>
              <TouchableOpacity onPress={() => RootNavigation.navigate("Main")}>
                <View>
                  <Entypo name="home" size={24} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => RootNavigation.navigate("Cafeteria Categories")}
              >
                <View>
                  <FontAwesome5 name="coffee" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </Footer>
            <StatusBar style="dark" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
