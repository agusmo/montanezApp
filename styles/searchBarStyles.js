import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors"

const {fontScale } = Dimensions.get("window");


const styles = StyleSheet.create({
  mainView: {
    borderBottomColor: Colors.deepLight,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1
  },

  textInputStyles: {
    backgroundColor: Colors.medium,
    width:  Dimensions.get("window").width/1.5,
    height:  55,
    marginRight: 10,
    color: Colors.accent,
    borderRadius: 8,
    fontSize: 20/fontScale,
    padding: 15,
  },

  customButtonStyles: {
    width:  "20%",
    height:  55,
    padding: 8,
  },
  buttonTextStyles: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  mainViewLandscape: {
    borderBottomColor: Colors.deepLight,
    width:  "75%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "25%",
    paddingBottom: 10,
    borderBottomWidth: 1
  }
});

export default styles;
