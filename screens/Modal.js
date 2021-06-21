import React from "react";

import { Button, Text, Modal, View, Image } from "react-native";

import styles from "../styles/modalStyles";

const ModalItem = (props) => {
  const { modalVisible, itemSelected, handleCloseModal } = props;
  const productImage =
    "https://previews.123rf.com/images/decobrush/decobrush1711/decobrush171100011/90847145-cupcake-icon-icono-de-cumplea%C3%B1os-s%C3%ADmbolo-de-vacaciones-y-amor-d%C3%ADa-de-san-valent%C3%ADn-l%C3%ADnea-delgada-muestra-vector-.jpg";

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      style={styles.generalModalStyle}
    >
      <Text style={styles.textStyles}>{itemSelected.name}</Text>
      <Image
        style={styles.imageStyles}
        source={{
          uri: itemSelected.imageUrl ? itemSelected.imageUrl : productImage,
        }}
      ></Image>
      <Text>Ha seleccionado el producto "{itemSelected.name}"</Text>
      <View style={styles.modalButton}>
        <Button
          color="black"
          onPress={() => handleCloseModal(itemSelected.id)}
          title="Cerrar"
        ></Button>
      </View>
    </Modal>
  );
};

export default ModalItem;
