import React from 'react';
import renderer, { create } from 'react-test-renderer';

import { Jogos } from '../../view/jogos'

const Component = create(<Jogos />)

describe("teste de funcionalidade dos jogos", () => {
    test("nome dos jogadores", () => {
        expect(Jogos)
    })

    test("childrens", () => {
        const rootComponent = Component.root
        expect(rootComponent.children.length).toBe(1)
    })
})