/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  PixelRatio,
} from 'react-native';

let AnotherToastAndroid = NativeModules.AnotherToastAndroid;

export default class mobike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
          AnotherToastAndroid.show('Another Toast', AnotherToastAndroid.LONG);
        }}>
          <Text style={{ textAlign: 'center', }}>
            Show Toast
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 8,
    borderColor: 'blue',
    marginHorizontal: 10,
    height: 50,
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('mobike', () => mobike);
