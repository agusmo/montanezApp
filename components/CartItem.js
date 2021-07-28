import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const CartItem = ({ item, onDelete }) => {
  console.log(item)
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
        <View style={styles.detail}>
          <View>
            <Text>Cantidad: {item.quantity}</Text>
          </View>
          <View>
            <Text>{item.price}</Text>
          </View>
          <Button
            title="X"
            onPress={() => onDelete(item.id)}
            color="black"
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  
  },
});

export default CartItem