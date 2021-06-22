import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import React from "react";
// import products from "./data/FlatlistData";
import styles from "../styles/productListStyles";

const ProductLists = (props) => {
  const { handleModal, products, handleDeleteItem } = props;
  const productImage =
    "https://previews.123rf.com/images/decobrush/decobrush1711/decobrush171100011/90847145-cupcake-icon-icono-de-cumplea%C3%B1os-s%C3%ADmbolo-de-vacaciones-y-amor-d%C3%ADa-de-san-valent%C3%ADn-l%C3%ADnea-delgada-muestra-vector-.jpg";
  

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              handleModal(item.id);
            }}
          >
            <View style={styles.mainView}>
              <Image
                style={styles.imageStyles}
                source={{ uri: item.imageUrl ? item.imageUrl : productImage }}
              ></Image>
              <Text style={styles.textStyles}>{item.name}</Text>
              <Button
            color="white"
            onPress={() => handleDeleteItem(item.id)}
            title="X"
          ></Button>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductLists;
