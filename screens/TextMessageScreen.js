import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import io from 'socket.io-client';

export default class TextMessage extends Component {
  constructor() {
    super();

    this.socket = io.connect('http://172.16.23.207:1337')
    this.socket.on('message', (message) => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    })

    this.state = {
      messages: [],
      text: ''
    }

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(event) {
    this.socket.emit('message', this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          {this.state.messages.map((message, idx) => {
            return <Text key={idx}>{message}</Text>
          })}
        </View>
        <TextInput
          style={{ height: 20, width: 100, borderColor: 'gray', borderWidth: 2 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={this.handlePress}
          title="Send Message"
          color="blue"
        />
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
  messageBox: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
