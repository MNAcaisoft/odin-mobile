import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Navigation } from 'react-native-navigation';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    console.log('props', props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to ARNS Login!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
