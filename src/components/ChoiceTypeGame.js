import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator, TouchableHighlight,
    TouchableWithoutFeedback
    , Image
} from 'react-native';

import GameEngine from './GameEngine';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "#000",

    },
    containerBtnStyle: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000",


    },
    footer: {
        width: windowWidth,
        height: 150,
        zIndex: 2,
        bottom: 2,
        position: 'absolute',
    },
    buttonBack: {
        width: 50,
        height: 50,
    },

    buttonBackContainer: {
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 10,
        zIndex: 5,
        position: "absolute",

    },
    inicioRapidoBtn: {
        width: 300,
        height: 50,
        backgroundColor: "#7c0d0d",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,

    },

    inicioComJogadorBtn: {
        width: 300,
        height: 50,
        backgroundColor: "#f28a02",
        alignSelf: "center",
        marginTop: 25,
        justifyContent: "center",
        borderRadius: 10,
    },

    textPlay: {
        color: "white",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "700",


    },

});

class ChoiceTypeGame extends Component {
    constructor(props) {
        super(props);
        this.inicioRapido = this.inicioRapido.bind(this);
        this._back = this._back.bind(this);


    }

    _back() {
        this.props.navigator.pop();
    }

    inicioRapido() {
        this.props.navigator.push({
            name: 'GameScreen', // Matches route.name
        })
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <TouchableHighlight
                    style={styles.buttonBackContainer}
                    onPress={this._back}
                >
                    <Image style={styles.buttonBack} source={require("../../img/back.png")} />
                </TouchableHighlight>

                <View style={styles.containerBtnStyle}>

                    <TouchableHighlight
                        style={styles.inicioRapidoBtn}
                        onPress={this.inicioRapido}
                    >
                        <Text style={styles.textPlay}> Inicio Rápido </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.inicioComJogadorBtn}
                        onPress={this.inicioComJogador}
                    >
                        <Text style={styles.textPlay}> Cadastrar Jogadores </Text>
                    </TouchableHighlight>

                </View>
                <Image style={styles.footer} source={require("../../img/fire.png")} />

            </View>
        );

    }
}

export default ChoiceTypeGame;

