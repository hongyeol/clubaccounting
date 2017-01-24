import Exponent from 'exponent';
import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button
} from 'react-native-elements'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Button
        raised
        icon={{name: 'cached'}}
        title='RAISED WITH ICON' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
