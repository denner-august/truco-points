import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export let tamanhoTela = {
    altura: windowHeight,
    largura:windowWidth
}