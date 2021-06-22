import React from "react";

import { Button, Text, Modal, View, Image } from "react-native";

import styles from "../styles/modalStyles";

const ModalItem = (props) => {
  const { modalVisible, itemSelected, handleCloseModal } = props;
  const productImage =
    "https://previews.123rf.com/images/decobrush/decobrush1711/decobrush171100011/90847145-cupcake-icon-icono-de-cumplea%C3%B1os-s%C3%ADmbolo-de-vacaciones-y-amor-d%C3%ADa-de-san-valent%C3%ADn-l%C3%ADnea-delgada-muestra-vector-.jpg";
  //si uso esta function dentro del renderizado condicional se me ejecuta la funcion cada vez que abro el modal, por ende el precio cambia. Solucionado en el addItemHandler
  const productRandomPrice = Math.round(Math.random() * 10);
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      style={styles.generalModalStyle}
    >
      <Image
        style={styles.imageStyles}
        source={{
          uri: itemSelected.imageUrl ? itemSelected.imageUrl : productImage,
        }}
      ></Image>
      <View style={styles.informationStyles}>
        <Text style={styles.titleStyles}>{itemSelected.name}</Text>
        <Text style={styles.textStyles}>{itemSelected.price}</Text>
      </View>
      <Text style={styles.descriptionStyles}>{itemSelected.description}</Text>
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
