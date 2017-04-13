import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator, TouchableHighlight,
    TouchableWithoutFeedback
    , Image
} from 'react-native';

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


});

class GameScreen extends Component {
    constructor() {
        super();


    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <Image style={styles.footer} source={require("../../img/fire.png")} />
            </View>
        );
    }
}

export default GameScreen;
