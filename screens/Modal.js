import React, { useState, useEffect } from "react";
import {
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import styles from "../styles/modalStyles";
import CustomButton from "../components/CustomButton";



const ModalItem = (props) => {
  const { modalVisible, itemSelected, handleCloseModal } = props;
  const productImage =
    "https://previews.123rf.com/images/decobrush/decobrush1711/decobrush171100011/90847145-cupcake-icon-icono-de-cumplea%C3%B1os-s%C3%ADmbolo-de-vacaciones-y-amor-d%C3%ADa-de-san-valent%C3%ADn-l%C3%ADnea-delgada-muestra-vector-.jpg";
  

  
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
    <Modal
      animationType="slide"
      visible={modalVisible}
      supportedOrientations={["portrait", "landscape"]}
    >
      <SafeAreaView style={styles.containerLS}>
        <Image
          style={isPortrait ? styles.imageStyles : styles.imageStylesLS}
          source={{
            uri: itemSelected.imageUrl ? itemSelected.imageUrl : productImage,
          }}
        />
        <View style={styles.informationStyles}>
          <Text style={styles.titleStyles}>{itemSelected.name}</Text>
          <Text style={styles.textStyles}>${itemSelected.price}</Text>
        </View>
        <Text style={styles.descriptionStyles}>{itemSelected.description}</Text>
        <CustomButton
          style={
            isPortrait ? styles.customButtonStyles : styles.customButtonStylesLS
          }
        >
          <TouchableOpacity onPress={() => handleCloseModal(itemSelected.id)}>
            <Text style={styles.buttonTextStyles}>Cerrar</Text>
          </TouchableOpacity>
        </CustomButton>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalItem;
