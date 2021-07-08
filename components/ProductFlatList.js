import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import styles from "../styles/productListStyles";
import Card from "../components/flatListCard";
import CustomButton from "./CustomButton";

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
            <Card style={styles.cardStyles}>
              <Image
                style={styles.imageStyles}
                source={{ uri: item.imageUrl ? item.imageUrl : productImage }}
              />
              <Text
                style={styles.textStyles}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <CustomButton style={styles.customButtonStyles}>
                <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                  <Text style={styles.buttonTextStyles}>X</Text>
                </TouchableOpacity>
              </CustomButton>
            </Card>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductLists;
