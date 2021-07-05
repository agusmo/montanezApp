import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors"

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.deepLight,
    borderBottomWidth: 1
  },

  textInputStyles: {
    backgroundColor: Colors.medium,
    width:  Dimensions.get("window").width/1.5,
    color: Colors.accent,
    borderRadius: 8,
    fontSize: 20,
    padding: 15,
  },

  customButtonStyles: {
    width:  Dimensions.get("window").width/1.5,
    maxWidth: 75,
    padding: 8,
  },
  buttonTextStyles: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 7.5
  }
});

export default styles;
