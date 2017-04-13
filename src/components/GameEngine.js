import React, {Component} from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator, TouchableHighlight,
    TouchableWithoutFeedback
    , Image
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerStyle: {
        width: windowWidth,
        height: windowHeight/2,
        backgroundColor: "#fff",
        
    },
     buttonVerdade: {
        width: 150,
        height: 50,
        backgroundColor: "#e0e806",
        justifyContent: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 0,
        

    },

     buttonConsequencia: {
        width: 150,
        height: 50,
        backgroundColor: "#7c0d0d",
        justifyContent: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 0,
        alignSelf: "flex-end"

    },

    textPlay: {
        color: "black",
        alignSelf: "center",
        fontSize: 15,
        fontWeight: "600",


    },


});

class GameEngine extends Component {
    constructor(props) {
        super(props);
        this._sorteiaVerdade = this._sorteiaVerdade.bind(this);
        this._sorteiaConsequencia = this._sorteiaConsequencia.bind(this);

    }

    _sorteiaVerdade() {

    }

    _sorteiaConsequencia(){

    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <TouchableHighlight
                    onPress={this._sorteiaVerdade}
                    style={styles.buttonVerdade}
                >
                    <Text style={styles.textPlay}>Verdade</Text>
                </TouchableHighlight>

                 <TouchableHighlight
                    onPress={this._sorteiaConsequencia}
                    style={styles.buttonConsequencia}
                >
                    <Text style={styles.textPlay}>Consequência</Text>
                </TouchableHighlight>

                

            </View>
        );

    }
}

export default GameEngine;
