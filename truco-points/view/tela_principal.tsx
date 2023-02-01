import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Nomeando } from '../components/nomeando';

export function TelaPrincipal({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.ContainerTitulo}>
                <Text style={styles.titulo}>Nome dos Jogadores</Text>
            </View>

            <Nomeando id={1} />
            <Nomeando id={2} />

            <TouchableOpacity onPress={() => navigation.navigate("Game")}>
                <Text style={styles.ButtonTitulo}>Continuar</Text>
            </TouchableOpacity>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 55,
        flex: 1,
        backgroundColor: '#181313',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ContainerTitulo: {

    },
    titulo: {
        color: "#ffff",
        fontSize: 25
    },
    ButtonTitulo: {
        color: "#ffff",
        fontSize: 25
    }
});
