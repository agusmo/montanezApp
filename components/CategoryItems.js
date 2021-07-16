import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Colors from "../constants/colors";

const CategoryItems = ({ item, onSelected }) => {
  return (
    <View style={style.gridItem}>

      <TouchableOpacity
        onPress={() => {
          onSelected(item);
        }}
        style={style.container}
      >
        <Text style={style.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.medium,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});

export default CategoryItems;
