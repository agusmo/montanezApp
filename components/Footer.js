import React from "react"
import {View, StyleSheet, Dimensions} from "react-native"
import Colors from "../constants/colors"
import Constants from 'expo-constants';

const {fontScale } = Dimensions.get("window");

const Footer = (props) => {
    return (
        <View style={styles.footer}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {     
    width: "100%",
    height: Platform.OS === "ios" ? 50 : Constants.statusBarHeight,
    backgroundColor: Colors.light,
    borderTopWidth: .5,
    borderTopColor: Colors.deepLight,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
},

})

export default Footer