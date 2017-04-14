import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator, TouchableHighlight,
    TouchableWithoutFeedback
    , Image
} from 'react-native';

import { Container, Content, Card, CardItem, Body } from 'native-base';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerStyle: {
        width: windowWidth,
        height: windowHeight / 2,
        backgroundColor: "#fff",
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
    },

    containerCard: {
        width: windowWidth - 20,
        height: 300,
        // backgroundColor: "blue",
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",

    },

    


});

class GameEngine extends Component {
    constructor(props) {
        super(props);
        this._sorteiaVerdade = this._sorteiaVerdade.bind(this);
        this._sorteiaConsequencia = this._sorteiaConsequencia.bind(this);
        this._sorteiaJogador = this._sorteiaJogador.bind(this);
        this.state = {
            sorteado: false,
        };

    }
    _sorteiaVerdade() {
        this.setState({
            sorteado: false,
        });
    }

    _sorteiaJogador() {
        this.setState({
            sorteado: true,
        });
    }

    _sorteiaConsequencia() {
        this.setState({
            sorteado: false,
        });
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <View style={styles.containerCard}>
                    <Container>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <View>
                                            <Text style={{height:200}}>
                                            //Your text here
                                            </Text>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </View>

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
