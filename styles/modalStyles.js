import { StyleSheet } from "react-native";
import Colors from "../constants/colors"

const styles = StyleSheet.create({
  generalModalStyle: {
    backgroundColor: Colors.light, 
    height: 300,
    
  },
  imageStyles: {
    marginTop: 60,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    width: 380,
    height: 300,
    alignItems: "center",
    borderRadius: 10,
  },
  titleStyles: {
    paddingLeft: 20,
    fontSize: 27,
    fontFamily: 'PlayfairDisplay-VariableFont'
  },
  textStyles: {
    backgroundColor: Colors.medium,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    fontWeight: "400",
    fontFamily: 'PlayfairDisplay-VariableFont'
  },
  descriptionStyles: {
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 15,
    maxWidth: 200,
    fontFamily: 'PlayfairDisplay-VariableFont'
  },
  customButtonStyles: {
    marginTop: 40,
    marginLeft: 55,
    padding: 5,
    width: 300,
   
    
  },
  informationStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
