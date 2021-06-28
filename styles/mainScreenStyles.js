import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  customButtonStyles: {
    padding: 25,
    width: 300,
    marginVertical: 15,
  },
});

export default styles;
