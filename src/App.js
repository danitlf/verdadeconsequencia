import React, { Component } from 'react';
import { View, ScrollView, Text,
     StyleSheet, Dimensions, 
     ActivityIndicator, TouchableHighlight, 
     TouchableWithoutFeedback
    ,Image} from 'react-native';

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };

  }

  render() {

    return (
      <View style={styles.containerStyle}>
        <Image style={styles.footer} source={require("../img/fire.png")} />
      </View>
    );
  }
}

export default App;
