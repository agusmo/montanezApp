import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#ddc9b5",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
  },

  textStyles: {
    fontSize: 23,
    color: "black",
    marginLeft: 10,
    marginRight: 10,
  },

  imageStyles: {
    marginRight: 15,
    width: 125,
    height: 125,
    borderRadius: 10,
  },
});

export default styles;
