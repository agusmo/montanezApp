import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors"

const CustomButton = props => {
    return (
        <View style={{...styles.customButtonStyles, ...props.style}}>
            {props.children}
        </View>
    
    )
}

const styles = StyleSheet.create({
    customButtonStyles: {
    backgroundColor: Colors.medium,
    borderRadius: 10
    },
})

export default CustomButton