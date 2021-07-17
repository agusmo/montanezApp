import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";

const { fontScale } = Dimensions.get("window");

const CarouselScreen = (props) => {

 const { categories, onSelected } = props;

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

 
  return (
    <Carousel
      layout={"default"}
      layoutCardOffset={`18`}
      data={categories}
      sliderWidth={400}
      itemWidth={500}
      autoplay={true}
      loop={true}
      enableMomentum={false}
      lockScrollWhileSnapping={true}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onSelected(item);
            }}
          >
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
    height: 200/fontScale,
    borderRadius: 20,
  },
  imageStylesLS: {
    width: null,
    height: null
  },
});

export default CarouselScreen;
