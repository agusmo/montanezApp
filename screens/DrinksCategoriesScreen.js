import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from "react-native";
import categories from "./data/CategoriesCafeData";
import CategoryItems from "../components/CategoryItems";
import * as RootNavigation from "../navigation/RootNavigation";
import Footer from "../components/Footer";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import CarouselScreen from "../components/Carousel";
import products from "./data/CategoriesCafeData";

const CategoriesScreen = ({ navigation, handleModal }) => {
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
      <View>
        <CarouselScreen products={products} handleModal={handleModal} />
      </View>
      <Text style={styles.title}>Categorías</Text>
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
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "PlayfairDisplay-VariableFont",
    marginHorizontal: 10,
    padding: 5,
  },
});

export default CategoriesScreen;
