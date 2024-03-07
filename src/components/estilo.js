import React from "react";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create(
    {
        fundo:{
            flexGrow: 1,
            justifyContent:"center",
            alignItems: "center",
            backgroundColor: "#333c4d",
        },

        font:{
            color: "white",
            fontSize: 18,
            marginBottom: 8,
            marginTop: 8,
        },

        title:{
            bottom: 100,
            color: "white",
            fontSize: 24,
            fontWeight:"bold",
            marginBottom: 16,
        }
    }
)

export default estilo;