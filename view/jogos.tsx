import { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Context } from "../context/stateManager";

import { tamanhoTela } from "../functions/dimensions";

export function Jogos() {

    const { JogadorA, jogadorB, placarTimeA, setPlacarTimeA } = useContext(Context)
    const { JogadorC, jogadorD, placarTimeB, setPlacarTimeB } = useContext(Context)

    function diminui(state: number, funcao: () => void) {
        if (state <= 0) {
            return
        }
        funcao()
    }

    function aumentar(state: number, funcao: () => void, jogar1: string, jogador2) {
        if (state + 1 === 12) {
            funcao()
            return Alert.alert(`${jogar1} e ${jogador2} ganharam`)
        }
        if (state >= 12) {
            return
        }
        funcao()
    }

    return (
        <View style={styles.Container}>
            <View style={styles.ViewChildrens}>
                <Text style={styles.nomes}>{JogadorA} {jogadorD}</Text>

                <TouchableOpacity style={styles.button} disabled>
                    <Text style={styles.nomes} >{placarTimeA}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => aumentar(placarTimeA, () => setPlacarTimeA(placarTimeA + 1), JogadorA, jogadorD)}>
                    <Text style={styles.nomes} >Aumenta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.diminui} onPress={() => diminui(placarTimeA, () => setPlacarTimeA(placarTimeA - 1))}>
                    <Text style={styles.nomes} >Diminui</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.nomes}>----------VS----------</Text>


            <View style={styles.ViewChildrens}>
                <Text style={styles.nomes}> {jogadorB} {JogadorC}</Text>


                <TouchableOpacity style={styles.button} disabled>
                    <Text style={styles.nomes}>{placarTimeB}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => aumentar(placarTimeB, () => setPlacarTimeB(placarTimeB + 1), jogadorB, JogadorC)}>
                    <Text style={styles.nomes} >Aumenta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.diminui} onPress={() => diminui(placarTimeB, () => setPlacarTimeB(placarTimeB - 1))}>
                    <Text style={styles.nomes}>Diminui</Text>
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
        flex: 1,
        width: tamanhoTela.largura,
        alignItems: "center",
        justifyContent: "center"
    },

    nomes: {
        fontSize: 25,
        color: "#ffff",
        textAlign: "center"
    },

    button: {
        borderWidth: 1,
        borderColor: "#ffff",
        padding: 5,
        width: (80 * tamanhoTela.largura) / 100,
        borderRadius: 10,
        marginVertical: 5
    },

    diminui: {
        borderWidth: 1,
        borderColor: "#ffff",
        padding: 5,
        width: (80 * tamanhoTela.largura) / 100,
        borderRadius: 10,
        marginVertical: 5
    }
})