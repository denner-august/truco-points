import { Text, View, StyleSheet } from "react-native";

export function Jogos() {
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