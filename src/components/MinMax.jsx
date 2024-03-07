import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilo from './estilo'

export default props => {

    console.warn(props)
    return (
        <View style={Estilo.fundo}>
            <Text style={style.Titulo}>O número {props.maior} é maio que o número {props.menor}</Text>
        </View>
    )
}


const style = StyleSheet.create(
    {
        Titulo: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
        }
    }
)