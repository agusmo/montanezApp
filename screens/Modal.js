import React from "react";
import { Button, Text, Modal, View, Image } from "react-native";
import styles from "../styles/modalStyles";
import CustomButton from "../components/CustomButton";


const ModalItem = (props) => {
  const { modalVisible, itemSelected, handleCloseModal } = props;
  const productImage =
    "https://previews.123rf.com/images/decobrush/decobrush1711/decobrush171100011/90847145-cupcake-icon-icono-de-cumplea%C3%B1os-s%C3%ADmbolo-de-vacaciones-y-amor-d%C3%ADa-de-san-valent%C3%ADn-l%C3%ADnea-delgada-muestra-vector-.jpg";

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: itemSelected.imageUrl ? itemSelected.imageUrl : productImage,
        }}
      />
      <View style={styles.informationStyles}>
        <Text style={styles.titleStyles}>{itemSelected.name}</Text>
        <Text style={styles.textStyles}>{itemSelected.price}</Text>
      </View>
      <Text style={styles.descriptionStyles}>{itemSelected.description}</Text>
      <CustomButton style={styles.customButtonStyles}>
        <Button
          color="black"
          onPress={() => handleCloseModal(itemSelected.id)}
          title="Cerrar"
        />
      </CustomButton>
     
    </Modal>
  );
};

export default ModalItem;
