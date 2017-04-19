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
     buttonBack: {
        width: 50,
        height: 50,
    },

    buttonBackContainer:{
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 10,
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
                    style={styles.buttonBackContainer}
                    onPress={this._back}
                >
                    <Image style={styles.buttonBack} source={require("../../img/back.png")} />
                </TouchableHighlight>

                <GameEngine players={["daniel", "luana", "fernanda", "rafa"]} />
                
                <Image style={styles.footer} source={require("../../img/fire.png")} />

            </View>
        );

    }
}

export default GameScreen;
