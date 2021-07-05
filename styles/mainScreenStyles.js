import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

const {fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  customButtonStyles: {
    width: Dimensions.get("window").width/1.5 ,
    marginVertical: "4%",
    padding: "6%",
  },
  buttonTextStyles: {
    color: "white",
    fontSize: 20/fontScale ,
    textAlign: "center",
  }
});

export default styles;
