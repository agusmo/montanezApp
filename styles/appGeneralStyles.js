import { StyleSheet } from "react-native";
import Colors from "../constants/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Colors.light,
    paddingTop: 10, 
  },
  headerTitleStyles : {
    color: "black",
    fontSize: 30,
    fontFamily: "PlayfairDisplay-VariableFont",
  }
});

export default styles;
