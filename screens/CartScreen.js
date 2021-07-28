import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem"
import { removeItem, confirmCart } from "../store/actions/cart.action";


const CartScreen = () => {
 const dispatch = useDispatch();
 const items = useSelector(state => state.cart.items);
 const total = useSelector(state => state.cart.total);
 
    const handleDeleteItem = (id) => dispatch(removeItem(id))
      const handleConfirmCart = () => dispatch(confirmCart(items));
  
  
    const renderItem = (data) => {
        return (
                <CartItem item={data.item} onDelete={handleDeleteItem} />
            )
    }
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
        <Button
          title="CONFIRMAR"
          onPress={handleConfirmCart}
          
        />
        <View style={styles.footer}>
          <Text style={styles.text}>TOTAL:</Text>
          <Text style={styles.text}>$ {total}</Text>
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  footer: {
    flex: 2,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  list: {
    flex: 8,
  },
  text: {
    fontSize: 24,
    padding: 8,
  },
});

export default CartScreen;
