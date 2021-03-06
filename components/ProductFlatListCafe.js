import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useEffect} from "react";
import styles from "../styles/productListStyles";
import Card from "../components/flatListCard";
import CustomButton from "./CustomButton";
 import { useSelector, useDispatch } from "react-redux";
import { filterCafe, selectCafe } from "../store/actions/cafe.action";
import { addItem } from "../store/actions/cart.action";


const ProductLists = (props) => {
    
  
   
  const { handleModal, products, handleDeleteItem, route } = props;
  const productImage =
    "https://previews.123rf.com/images/decobrush/decobrush1711/decobrush171100011/90847145-cupcake-icon-icono-de-cumplea%C3%B1os-s%C3%ADmbolo-de-vacaciones-y-amor-d%C3%ADa-de-san-valent%C3%ADn-l%C3%ADnea-delgada-muestra-vector-.jpg";

  
   const dispatch = useDispatch();
   const categoryCafe = useSelector((state) => state.cafe.filteredCafe);
   const category = useSelector((state) => state.categoriesCafe.selected);
   const item = useSelector((state) => state.cafe.selected);
 
   const handleAddItem = () => dispatch(addItem(item));
  

   useEffect(() => {
     dispatch(filterCafe(category.id));
  
   }, []);
  
  

  return (
    <FlatList
      // data={products}
      data={categoryCafe}
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
                <TouchableOpacity onPress={handleAddItem}>
                  <Text style={styles.buttonTextStyles}>+</Text>
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
