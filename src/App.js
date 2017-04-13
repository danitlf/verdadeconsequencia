import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
    ActivityIndicator, TouchableHighlight,
    TouchableWithoutFeedback
    , Image
} from 'react-native';

import Main from './components/Main';
import GameScreen from './components/GameScreen'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "#000"
    },


});

class App extends Component {
    constructor() {
        super();


    }

    renderScene(route, navigator) {
        if (route.name == 'Main') {
            return <Main navigator={navigator} />
        }
        if (route.name == 'GameScreen') {
            return <GameScreen navigator={navigator} />
        }
    }

    render() {

        return (
            <View style={styles.containerStyle}>
                <Navigator
                    style={{ flex: 1 }}
                    initialRoute={{ name: 'Main' }}
                    renderScene={this.renderScene} />
            </View>
        );
    }
}

export default App;
