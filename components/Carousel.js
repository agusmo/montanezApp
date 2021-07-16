import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";


const CarouselScreen = (props) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("window");
    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    setIsPortrait(onPortrait());

    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  }, []);

  const { products } = props;
  return (
    <Carousel
      layout={"default"}
      layoutCardOffset={`18`}
      data={products}
      sliderWidth={400}
      itemWidth={500}
      autoplay={true}
      loop={true}
      enableMomentum={false}
      lockScrollWhileSnapping={true}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View style={styles.container}>
              <Image
                style={isPortrait ? styles.imageStyles : styles.imageStylesLS}
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
    width: Dimensions.get("window").width / 1.09,
    height: 200,
    borderRadius: 20,
  },
  imageStylesLS: {
    width: null,
    height: null
  },
});

export default CarouselScreen;
