import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View} from "react-native";
import ProductLists from "./screens/ProductList";
import SearchBar from "./screens/SearchBar";
import ModalItem from "./screens/Modal";
// import products from "./screens/data/FlatlistData";
import styles from "./styles/mainScreenStyles";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [inputText, setInputText] = useState("");
  const [products, setProducts] = useState([
    {
      name: "Croissant",
      id: "1",
      imageUrl:
        "https://as2.ftcdn.net/jpg/00/27/28/29/220_F_27282940_RLisLpuObpi9V4FZn1QuisHDZdVKXqGp.jpg",
    },
    {
      name: "Cannoli",
      id: "2",
      imageUrl:
        "https://media.istockphoto.com/photos/italian-cannoli-picture-id525615039",
    },
    {
      name: "Macaroons",
      id: "3",
      imageUrl:
        "https://thumbs.dreamstime.com/b/french-macaron-cookies-colorful-pastel-39852149.jpg",
    },
    {
      name: "Churros",
      id: "4",
      imageUrl:
        "https://media.istockphoto.com/photos/churros-isolated-on-white-background-picture-id615739438",
    },
    {
      name: "Lemon Pie",
      id: "5",
      imageUrl:
        "https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0263610000000_CL_hyvee_default_large.png",
    },
    {
      name: "Cheesecake",
      id: "6",
      imageUrl:
        "https://media.istockphoto.com/photos/classic-cheesecake-with-cherry-sauce-picture-id1093880340?k=6&m=1093880340&s=612x612&w=0&h=nGkC6zlQDWNPSNg8NOw6WCRTIzY9bFKJznHDqRImGvU=",
    },
  ]);

  const handleChangeText = (text) => {
    setInputText(text);
    
  };

  const handleAddItem = () => {
    if (inputText) {
      setProducts([
        ...products,
        { id: Math.random().toString(), name: inputText },
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
      <SearchBar  handleChangeText={handleChangeText} inputText={inputText}  handleAddItem={handleAddItem}/>
      <ProductLists handleModal={handleModal} products={products} handleDeleteItem={handleDeleteItem} itemSelected={itemSelected}/>
      <ModalItem
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleCloseModal={handleCloseModal}
      />
      <StatusBar style="dark" />
    </View>
  );
}
