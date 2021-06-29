import React from "react"
import {View, StyleSheet} from "react-native"
import Colors from "../constants/colors"


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
    height: 75,
    backgroundColor: Colors.light,
    borderTopWidth: .5,
    borderTopColor: Colors.deepLight,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
},
footerTitle :{
    color: "black",
    fontSize: 20
} 
})

export default Footer