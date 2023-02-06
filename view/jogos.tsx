import { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/stateManager";

export function Jogos() {

    const { JogadorA, jogadorB, placarTimeA, setPlacarTimeA } = useContext(Context)
    const { JogadorC, jogadorD, placarTimeB, setPlacarTimeB } = useContext(Context)

    return (
        <View style={styles.Container}>
            <View style={styles.ViewChildrens}>
                <Text style={styles.nomes}>{JogadorA}</Text>
                <Text style={styles.nomes}> {jogadorD}</Text>

                <TouchableOpacity onPress={() => setPlacarTimeA(placarTimeA + 1)}>
                    <Text style={styles.nomes} >{placarTimeA}</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.nomes}>----------VS----------</Text>


            <View style={styles.ViewChildrens}>
                <Text style={styles.nomes}>{JogadorC}</Text>
                <Text style={styles.nomes}>{jogadorB}</Text>

                <TouchableOpacity onPress={() => setPlacarTimeB(placarTimeB + 1)}>
                    <Text style={styles.nomes}>{placarTimeB}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "space-evenly",
        alignItems: 'center'
    },

    ViewChildrens: {
        alignItems: "center"
    },

    nomes: {
        fontSize: 25,
        color: "#ffff"

    }
})