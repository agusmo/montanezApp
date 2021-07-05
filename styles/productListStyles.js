import { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors"


const {fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
   cardStyles: {
    backgroundColor: Colors.medium,
  },
  textStyles: {
    color: Colors.accent,
    fontSize: 23 / fontScale,
    maxWidth: 110,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'PlayfairDisplay-VariableFont'
  },

  imageStyles: {
    marginRight: 15,
    width:  Dimensions.get("window").width/3.4,
    height: Dimensions.get("window").width/3.4,
    borderRadius: 10,
  },
  buttonTextStyles: {
    color: "white",
    fontSize: 20,
    marginRight: 10
  }
});

export default styles;
