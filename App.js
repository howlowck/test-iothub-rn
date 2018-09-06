import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import global from "global";
import { Buffer } from "buffer";
import process from "process";
global.Buffer = Buffer;
window.Buffer = Buffer;
global.process = process;

import connectDevice from 'iothub-browser/dist/connectDevice';

const {publish, close} = connectDevice('[Device Connection String]', (topic, c2dMessage) => {
  console.log(c2dMessage)
})

const sendMessage = () => {
  console.log('sending...')
  publish(JSON.stringify({message: "hello from react-native", timestamp: Date.now()}))
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={sendMessage} title="send messages">Send Message</Button>
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
