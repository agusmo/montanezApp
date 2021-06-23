import React from "react"
import {View, Text, StyleSheet} from "react-native"
import Colors from "../constants/colors"
console.log(Colors)


const Footer = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
    width: "100%",
    height: 75,
    backgroundColor: Colors.light,
    borderTopWidth: .5,
    borderTopColor: Colors.deepLight,
    alignItems: "center",
    justifyContent: "center",
},
headerTitle :{
    color: "black",
    fontSize: 20
} 
})

export default Footer