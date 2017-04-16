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
        height: 300,
        // backgroundColor: "blue",
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",

    },

    contentCard: {
        justifyContent: "center",
        width: windowWidth - 20,
        alignSelf: "center",
        height: 200

    }

    


});

class GameBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sorteado: false,
            jogadorSorteado: "",
        };
        PubSub.subscribe( 'sorteado', function(msg, sort){
            this.setState({
                sorteado: sort.sorteado,
            });
        }.bind(this));
        

    }

    render() {

        return (
             <View style={styles.containerCard}>
                <Container>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <View style={styles.contentCard}>
                                        {this.state.sorteado &&
                                        <Text style={{ height: 200, alignSelf: "center" }}>
                                       Jogador Sorteado: {this.state.jogadorSorteado}
                                        </Text>}
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