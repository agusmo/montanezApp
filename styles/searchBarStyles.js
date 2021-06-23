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
  },

  textInputStyles: {
    backgroundColor: Colors.medium,
    color: Colors.accent,
    borderRadius: 8,
    fontSize: 20,
    width: 300,
    padding: 15,
  },

  inputButton: {
    backgroundColor: Colors.medium,
    width: 75,
    borderRadius: 8,
    padding: 8,
  },
});

export default styles;
