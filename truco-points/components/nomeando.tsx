import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export function Nomeando() {

    const [JogadorA, setJogadorA] = useState("")
    const [jogadorB, setJogadorB] = useState("")

    return (
        <View style={styles.Container}>
            <View>
                <TextInput value={JogadorA} onChangeText={(value) => setJogadorA(value)} style={styles.input} placeholder="Jogador-A" placeholderTextColor="#8d8c8c" />
            </View>

            <View>
                <TextInput value={jogadorB} onChangeText={(value) => setJogadorB(value)} style={styles.input}
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