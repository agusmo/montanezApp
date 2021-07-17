import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  
} from "react-native";
import * as RootNavigation from "../navigation/RootNavigation";
import categories from "./data/CategoriesBakeryData";
import CategoryItems from "../components/CategoryItems";
import Footer from "../components/Footer";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import products from "./data/CategoriesBakeryData"
import CarouselScreen from "../components/Carousel";
import colors from "../constants/colors";

const { fontScale } = Dimensions.get("window");

const CategoriesScreen = ({ navigation, handleModal, itemSelected }) => {
  const handleSelected = (item) => {
    navigation.navigate("Bakery", {
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
        <CarouselScreen
          categories={categories}
          keyExtractor={(item) => item.id}
          onSelected={handleSelected}
        />
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
          onPress={() => RootNavigation.navigate("Cafeteria Categories")}
        >
          <View>
            <FontAwesome5 name="coffee" size={24} color="black" />
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
