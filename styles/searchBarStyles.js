import { StyleSheet } from "react-native";
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
    color: Colors.accent,
    borderRadius: 8,
    fontSize: 20,
    width: 300,
    padding: 15,
  },

  customButtonStyles: {
    width: 75,
    padding: 8,
  },
});

export default styles;
