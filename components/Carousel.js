import{
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import Card from "../components/flatListCard";
import Carousel from "react-native-snap-carousel";

const CarouselScreen = (props) => {

  const { products  } = props;
    return (
      <Carousel
        layout={"default"}
        layoutCardOffset={`18`}
        data={products}
        sliderWidth={400}
        itemWidth={500}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.container}>
                <Image
                  style={styles.imageStyles}
                  source={{ uri: item.image }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
  },
  imageStyles: {
    width: 390,
    height: 200,
    borderRadius: 20,
  },
});

export default CarouselScreen;
