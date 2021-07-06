import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors"

const {fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
  imageStyles: {
    marginTop: "15%",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    width: Dimensions.get("window").width/1.075,
    height: Dimensions.get("window").width/1.5,
    borderRadius: 10,
  },
  titleStyles: {
    paddingLeft: 20,
    fontSize: 27/fontScale,
    fontFamily: 'PlayfairDisplay-VariableFont'
  },
  textStyles: {
    backgroundColor: Colors.medium,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25/fontScale,
    fontWeight: "400",
    fontFamily: 'PlayfairDisplay-VariableFont'
  },
  descriptionStyles: {
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 15/fontScale,
    maxWidth: 200,
    fontFamily: 'PlayfairDisplay-VariableFont'
  },
  customButtonStyles: {
    marginLeft: 50,
    marginTop: 40,
    padding: 5,
    width: 300/fontScale,
  },
  buttonTextStyles: {
    fontSize: 20/fontScale,
    textAlign: "center",
    padding: 10,
  },
  informationStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStylesLS: {
    width: Dimensions.get("window").width/3,
    height: Dimensions.get("window").width/4,
    marginLeft: "35%",
    marginRight: 15,
  },
  customButtonStylesLS: {
    width: "25%",
    padding: "1%",
    margin: 15,
    marginLeft: "40%"
  }

});

export default styles;
