import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
} from 'react-native';
import PubSub from 'pubsub-js';


import { Container, Content, Card, CardItem, Body } from 'native-base';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerCard: {
        width: windowWidth - 20,
        height: 200,
        borderRadius: 10,
        backgroundColor: "#fff",
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        //borderColor: "#f28a02",
        borderColor: "#fff",
        borderWidth: 4,
    },

    contentCard: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 30,

    },

    textoJogador: {
        height: 50,
        alignSelf: "center",
        color: "#000",
        fontWeight: "700",
        fontSize: 15,
    },

    textoQuestao: {
        alignSelf: "center",
        color: "#000",
        fontWeight: "700",
        fontSize: 15,
    },
    contentQuestions: {
        height: 150,
        alignSelf: "center",
        justifyContent: "center",
        marginRight: 20,
        marginLeft: 20,
        position: "relative",
        top: -30,
    },
});

class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sorteado: false,
            jogadorSorteado: "",
            question: "tire a roupa e troque com a pessoa ao seu lado! jfkjebvkjwdjkvwkjfvbkwjfbkvwfvkwjfk"
        };
        PubSub.subscribe('sorteado', function (msg, data) {
            this.setState({
                jogadorSorteado: data.jogadorSorteado,
                sorteado: data.sorteado,

            });
        }.bind(this));


    }

    render() {

        return (
            <View style={styles.containerCard}>
                <View style={styles.contentCard}>
                    <Text style={styles.textoJogador}>
                        Jogador Sorteado: {this.state.jogadorSorteado}
                    </Text>
                    <View style={styles.contentQuestions}>
                        <Text style={styles.textoQuestao}>
                            {this.state.question}
                        </Text>
                    </View>
                </View>

            </View>


        );

    }
}

export default GameBoard;