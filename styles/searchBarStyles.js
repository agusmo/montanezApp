import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors"

const {fontScale } = Dimensions.get("window");


const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.deepLight,
    borderBottomWidth: 1
  },

  textInputStyles: {
    backgroundColor: Colors.medium,
    width:  Dimensions.get("window").width/1.5,
    height:  55,
    color: Colors.accent,
    borderRadius: 8,
    fontSize: 20/fontScale,
    padding: 15,
  },

  customButtonStyles: {
    width:  Dimensions.get("window").width/1.5,
    height:  55,
    maxWidth: 75,
    padding: 8,
  },
  buttonTextStyles: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  }
});

export default styles;
