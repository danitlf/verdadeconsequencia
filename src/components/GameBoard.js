import React, { Component } from 'react';
import {
    View, Navigator, Text,
    StyleSheet, Dimensions,
} from 'react-native';

import { Container, Content, Card, CardItem, Body } from 'native-base';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerCard: {
        width: windowWidth - 20,
        height: 300,
        // backgroundColor: "blue",
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",

    },

    


});

class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sorteado: false,
        };

    }

    render() {

        return (
            <View style={styles.containerCard}>
                <Container>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <View>
                                        <Text style={{ height: 200 }}>
                                        //Your text here
                                        </Text>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </View>


        );

    }
}

export default GameBoard;