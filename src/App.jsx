import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Estilo from './components/estilo'
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";


export default () => {

    return (
        <View style={Estilo.fundo}>
            <Titulo/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            {/* <MinMax maior={90} menor={10}/> */}
        </View>
    )
}





