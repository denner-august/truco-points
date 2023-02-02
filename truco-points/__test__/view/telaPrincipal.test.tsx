import React from 'react';
import renderer, { create } from 'react-test-renderer';

import { Nomeando } from '../../components/nomeando'

const component = create(<Nomeando />)

describe('<Nomeando />', () => {
    it('procura quantidade de inputs', () => {
        const findInputA = component.root.findByProps({ testID: "Jogador-A" }).props;
        expect(findInputA.placeholder).toEqual("Jogador-A")

        const findInputB = component.root.findByProps({ testID: "Jogador-B" }).props;
        expect(findInputB.placeholder).toEqual("Jogador-")
    })
});