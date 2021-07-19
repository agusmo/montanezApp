import React from "react";
import { StyleSheet, FlatList, View, TouchableOpacity, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CategoryItems from "../components/CategoryItems";
import * as RootNavigation from "../navigation/RootNavigation";
import Footer from "../components/Footer";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import CarouselScreen from "../components/Carousel";
import { selectCafeCategory } from "../store/actions/category.cafe.action";

const { fontScale } = Dimensions.get("window");

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const drinksCategories = useSelector(state => state.categoriesCafe.list);

  const handleSelected = (item) => {
    dispatch(selectCafeCategory(item.id));
    navigation.navigate("Cafeteria", {
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItems item={item} onSelected={handleSelected} />
  );

  return (
    <View style={styles.container}>
      <View>
        <CarouselScreen
          categories={drinksCategories}
          keyExtractor={(item) => item.id}
          onSelected={handleSelected}
        />
      </View>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        data={drinksCategories}
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
    fontSize: 29/fontScale,
    fontFamily: "PlayfairDisplay-VariableFont",
    marginHorizontal: 10,
    padding: 5,
  },
});

export default CategoriesScreen;
