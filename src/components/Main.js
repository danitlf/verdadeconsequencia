import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator,
    TouchableHighlight,
    Button,
    Image
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
    },
    
    footer: {
        width: windowWidth,
        height: 150,
        zIndex: 2,
        bottom: 2,
        position: 'absolute',
    },

    buttonGame: {
        width: 300,
        height: 50,
        backgroundColor: "#7c0d0d",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,

    },

    buttonPergunta: {
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


    }


});

class Main extends Component {
    constructor(props) {
        super(props);
        this._startGame = this._startGame.bind(this);

    }
    _startGame() {
        this.props.navigator.push({
            name: 'ChoiceTypeGame', // Matches route.name
        })
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <TouchableHighlight
                    onPress={this._startGame}
                    title="Jogar"
                    style={styles.buttonGame}
                >
                    <Text style={styles.textPlay}> Jogar </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this._startGame}
                    title="Cadastrar Pergunta"
                    style={styles.buttonPergunta}
                >
                    <Text style={styles.textPlay}> Cadastrar Pergunta </Text>
                </TouchableHighlight>



                <Image style={styles.footer} source={require("../../img/fire.png")} />

            </View>
        );
    }
}

export default Main;
