import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator, TouchableHighlight,
    TouchableWithoutFeedback
    , Image
} from 'react-native';
import PubSub from 'pubsub-js';
import Draw from '../utils/Draw';

import { Container, Content, Card, CardItem, Body } from 'native-base';

import GameBoard from './GameBoard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerStyle: {
        width: windowWidth,
        height: windowHeight / 2,
        backgroundColor: "#000",
        justifyContent: "center"

    },
    buttonVerdade: {
        width: 150,
        height: 50,
        backgroundColor: "#f28a02",
        justifyContent: "center",
        borderRadius: 10,



    },

    buttonConsequencia: {
        width: 150,
        height: 50,
        backgroundColor: "#7c0d0d",
        justifyContent: "center",
        borderRadius: 10,


    },

    textPlay: {
        color: "white",
        alignSelf: "center",
        fontSize: 15,
        fontWeight: "600",


    },

    buttonsSpace: {
        position: "absolute",
        bottom: 0,
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

class GameEngine extends Component {
    constructor(props) {
        super(props);
        this._sorteiaVerdade = this._sorteiaVerdade.bind(this);
        this._sorteiaConsequencia = this._sorteiaConsequencia.bind(this);
        this._sorteiaJogador = this._sorteiaJogador.bind(this);
        this.state = {
            sorteado: false,
            jogadorSorteado: "",
            playersSorteados: this.geraJogadores(),
            jogadorAtual: 0,

        };  

    }
    geraJogadores(){
        var listaSorteados =  [this.props.players[0]]
        for(i=1; i<50;i++){
            listaSorteados.push(Draw.drawPlayer(this.props.players, listaSorteados[i-1]));
        }
        return listaSorteados;
    }
    _sorteiaVerdade() {
        this.setState({
            sorteado: false,
            jogadorSorteado: "",
        });
        PubSub.publish( 'sorteado', {sorteado: false} );
    }

    _sorteiaJogador() {
        PubSub.publish( 'sorteado', {sorteado: true, jogadorSorteado: this.state.playersSorteados[this.state.jogadorAtual]});
        this.setState({
            sorteado: true,
            jogadorAtual: this.state.jogadorAtual+1
        });    
        if(this.state.playersSorteados.length < this.state.jogadorAtual + 10){
            this.setState({
                jogadorAtual: 0,
                playersSorteados: this.geraJogadores(),
            });
        }  
       
    }

    _sorteiaConsequencia() {
        this.setState({
            sorteado: false,
            jogadorSorteado: "",
        });
        PubSub.publish( 'sorteado', {sorteado: false} );
    }

    render() {

        return (
            <View style={styles.containerStyle}>

                <GameBoard/>

                <View style={styles.buttonsSpace}>
                    {this.state.sorteado && (
                        <View>
                            <TouchableHighlight
                                onPress={this._sorteiaVerdade}
                                style={styles.buttonVerdade}
                            >
                                <Text style={styles.textPlay}>Verdade</Text>
                            </TouchableHighlight>
                        </View>
                    )}
                    {this.state.sorteado && (
                        <View>
                            <TouchableHighlight
                                onPress={this._sorteiaConsequencia}
                                style={styles.buttonConsequencia}
                            >
                                <Text style={styles.textPlay}>Consequência</Text>
                            </TouchableHighlight>
                        </View>

                    )}
                    {!this.state.sorteado && (
                        <View>
                            <TouchableHighlight
                                onPress={this._sorteiaJogador}
                                style={styles.buttonVerdade}
                            >
                                <Text style={styles.textPlay}>Sortear Jogador</Text>
                            </TouchableHighlight>
                        </View>
                    )}
                </View>


            </View>
        );

    }
}

export default GameEngine;
