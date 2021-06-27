import { StyleSheet } from "react-native";
import Colors from "../constants/colors"




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Colors.light,
    paddingTop: 50,
    
  },
  title: {
    justifyContent: "center",
    fontFamily: "Playfair",
    alignSelf: "center",
    fontSize: 40,
    color: Colors.accent,
  },
});

export default styles;
