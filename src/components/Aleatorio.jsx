import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Estilo from "./estilo"


export default props=>{
    const delta = props.max - props.min + props.min
    const cal = parseInt(Math.random() * delta + props.min)
    console.warn(cal)
    return(
        <View>
            <Text style={Estilo.font}>Números {cal}</Text>
        </View>

    )
}

