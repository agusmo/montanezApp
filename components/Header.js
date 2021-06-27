import React from "react"
import {View, Text, StyleSheet} from "react-native"
import Colors from "../constants/colors"
console.log(Colors)


const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "center",
    
},
headerTitle :{
    color: "black",
    fontSize: 40,
    fontFamily: 'PlayfairDisplay-VariableFont'
} 
})

export default Header