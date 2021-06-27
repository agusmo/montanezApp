import { StyleSheet } from "react-native";
import Colors from "../constants/colors"

const styles = StyleSheet.create({
   cardStyles: {
    backgroundColor: Colors.medium,
  },

  textStyles: {
    fontSize: 23,
    color: Colors.accent,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'PlayfairDisplay-VariableFont'
  },

  imageStyles: {
    marginRight: 15,
    width: 125,
    height: 125,
    borderRadius: 10,
  },
});

export default styles;
