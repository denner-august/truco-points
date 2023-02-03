import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaPrincipal } from '../view/tela_principal';
import { Jogos } from '../view/jogos';

const Stack = createNativeStackNavigator();

export function StackRouter() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={TelaPrincipal} />
                <Stack.Screen options={{ headerShown: false }} name="Game" component={Jogos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
