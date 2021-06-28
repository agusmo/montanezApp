import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors"

const Card = props => {
    return (
        <View style={{...styles.cardStyles, ...props.style}}>
            {props.children}
        </View>
    
    )
}

const styles = StyleSheet.create({
    cardStyles: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
    },
})

export default Card