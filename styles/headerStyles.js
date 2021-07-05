import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height:  Dimensions.get("window").width/5 ,
        alignItems: "center",
        justifyContent: "center",
      },
      headerTitle: {
        color: "black",
        fontSize: 40,
        fontFamily: "PlayfairDisplay-VariableFont",
      },
});

export default styles;
