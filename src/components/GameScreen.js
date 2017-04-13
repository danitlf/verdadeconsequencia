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
        backgroundColor: "#000"
    },
    footer: {
        width: windowWidth,
        height: 150,
        zIndex: 2,
        bottom: 2,
        position: 'absolute',
    },
     buttonGame: {
        width: 100,
        height: 50,
        backgroundColor: "#e0e806",
        justifyContent: "center",
        borderRadius: 10,

    },
    textPlay: {
        color: "black",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "700",


    },


});

class GameScreen extends Component {
    constructor(props) {
        super(props);
        this._back = this._back.bind(this);

    }

    _back() {
        this.props.navigator.pop();
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <TouchableHighlight
                    onPress={this._back}
                    style={styles.buttonGame}
                >
                    <Text style={styles.textPlay}>Voltar</Text>
                </TouchableHighlight>

                <GameEngine/>
                <Image style={styles.footer} source={require("../../img/fire.png")} />

            </View>
        );

    }
}

export default GameScreen;
