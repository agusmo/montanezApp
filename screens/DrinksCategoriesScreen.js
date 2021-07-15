import React from "react";
import { StyleSheet, FlatList } from "react-native";
import categories from "./data/CategoriesCafeData";
import CategoryItems from "../components/CategoryItems";

const CategoriesScreen = ({ navigation }) => {
  const handleSelected = (item) => {
    navigation.navigate("Cafeteria", {
      id: item.id,
      title: item,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItems item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
