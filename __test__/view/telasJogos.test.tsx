import React from 'react';
import renderer, { create } from 'react-test-renderer';

import { Jogos } from '../../view/jogos'
import { Text, TouchableOpacity } from 'react-native';

const Component = create(<Jogos />)

describe("teste de funcionalidade dos jogos", () => {
    test("nome dos jogadores", () => {
        expect(Jogos)
    })

    test("childrens", () => {
        const rootComponent = Component.root
        expect(rootComponent.children.length).toBe(1)
    })

    test('testando se os 4 jogadores estão na tela', () => {
        const rootComponent = Component.root.findAllByType(Text)
        expect(rootComponent.length).toBe(9)
    })

    test('testando se os buttons estão  estão na tela', () => {
        const rootComponent = Component.root.findAllByType(TouchableOpacity)
        expect(rootComponent.length).toBe(6)
    })
})