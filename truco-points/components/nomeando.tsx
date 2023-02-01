import { useContext } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import { Context } from "../context/stateManager";

interface NomeandoProps {
    id: 1 | 2
}

export function Nomeando({ id }: NomeandoProps) {

    const { JogadorA, jogadorB, setJogadorA, setJogadorB } = useContext(Context)
    const { JogadorC, jogadorD, setJogadorC, setJogadorD } = useContext(Context)

    const verificaDuplas = {
        duplaA: id === 1 ? JogadorA : JogadorC,
        duplaB: id === 2 ? jogadorB : jogadorD
    }

    const MudaNomeVerificaDupla = {
        duplaA: id === 1 ? setJogadorA : setJogadorC,
        duplaB: id === 2 ? setJogadorB : setJogadorD
    }

    return (
        <View style={styles.Container}>
            <View>
                <TextInput value={verificaDuplas.duplaA} onChangeText={(value) => MudaNomeVerificaDupla.duplaA(value)} style={styles.input} placeholder="Jogador-A" placeholderTextColor="#8d8c8c" />
            </View>

            <View>
                <TextInput value={verificaDuplas.duplaB} onChangeText={(value) => MudaNomeVerificaDupla.duplaB(value)} style={styles.input}
                    placeholder="Jogador-B" placeholderTextColor="#8d8c8c" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    titulo: {
        color: "#ffff",
        fontSize: 20
    },
    input: {
        color: "#ffff",
        fontSize: 23,
        borderColor: "#ffff",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        height: 60,
        minWidth: 100
    }
})