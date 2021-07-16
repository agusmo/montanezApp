import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import categories from "./data/CategoriesCafeData";
import CategoryItems from "../components/CategoryItems";
import * as RootNavigation from "../navigation/RootNavigation";
import Footer from "../components/Footer";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const CategoriesScreen = ({ navigation, route }) => {
  const handleSelected = (item) => {
    navigation.navigate("Cafeteria", {
      categoryId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItems item={item} onSelected={handleSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <Footer>
        <TouchableOpacity onPress={() => RootNavigation.navigate("Main")}>
          <View>
            <Entypo name="home" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => RootNavigation.navigate("Bakery Categories")}
        >
          <View>
            <FontAwesome5 name="cookie-bite" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
