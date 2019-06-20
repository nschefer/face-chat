import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class VideoCall extends Component {
  render() {
    return (
      <View>
        <Text>Video Calling Screen</Text>
        <View style={styles.videoContainer} />
      </View>
    )
  }
}

const width = '80%';
const height = '50%';


const styles = StyleSheet.create({
  videoContainer: {
    width,
    height
  }
})
