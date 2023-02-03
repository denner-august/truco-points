import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context } from "../context/stateManager";

export function Jogos() {

    const { JogadorA, jogadorB } = useContext(Context)
    const { JogadorC, jogadorD } = useContext(Context)

    return (
        <View style={styles.Container}>
            <Text style={{ color: "#ffff" }}>tela dos jogos</Text>
        </View >

    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: 'center'
    }
})