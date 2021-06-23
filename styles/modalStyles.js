import { StyleSheet } from "react-native";
import Colors from "../constants/colors"

const styles = StyleSheet.create({
  generalModalStyle: {
    backgroundColor: Colors.light, 
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
    fontWeight: "500",
  },
  textStyles: {
    backgroundColor: Colors.medium,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    fontWeight: "400",
  },
  descriptionStyles: {
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 15,
    maxWidth: 200,
  },
  modalButton: {
    backgroundColor:Colors.medium,
    marginTop: 40,
    marginLeft: 55,
    padding: 5,
    borderRadius: 20,
    width: 300,
  },
  informationStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
