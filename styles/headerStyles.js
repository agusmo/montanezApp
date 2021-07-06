import { StyleSheet, Dimensions } from "react-native";

const {fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height:  Dimensions.get("window").width/5 ,
        alignItems: "center",
        justifyContent: "center",
      },
      headerTitle: {
        color: "black",
        textAlign: "center",
        fontSize: 40/fontScale,
        fontFamily: "PlayfairDisplay-VariableFont",
      },
});

export default styles;
