'use strict';

var React = require('react-native');
var {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

import BaseModules, {
	Test
} from '../utils/BaseModules';

var TestComp = React.createClass({
  measureWelcome() {
    this.refs.welcome.measure(this.logWelcomeLayout);
  },

  logWelcomeLayout(ox, oy, width, height, px, py) {
    console.log("ox: " + ox);
    console.log("oy: " + oy);
    console.log("width: " + width);
    console.log("height: " + height);
    console.log("px: " + px);
    console.log("py: " + py);
	Alert.alert('height: ', height.toString());
  },

  render() {
    return (
      <View style={styles.container} ref="welcome">
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={this.measureWelcome}>
          <Text>Measure it</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = TestComp;