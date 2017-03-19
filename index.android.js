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
  Alert,
} from 'react-native';

let AnotherToastAndroid = NativeModules.AnotherToastAndroid;

export default class mobike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='show toast'
          pressHandler={() => AnotherToastAndroid.show('Another Toast', AnotherToastAndroid.LONG)}
        />
        <Button
          style={{ marginTop: 10, }}
          title='use callback'
          pressHandler={
            () => {
              AnotherToastAndroid.currentThreadName((msg) => console.log(`error message ${msg}`)
                , (threadName) => {
                  {/*console.Console.log(`thread nane: ${threadName}`);*/ }
                  Alert.alert('Thread Name', `thread nane: ${threadName}`, null);
                });
            }}
        />
        <Button
          style={{ marginTop: 10, }}
          title='use Promise'
          pressHandler={
            () => {
              AnotherToastAndroid.currentThreadNameByPromise().then((threadName) =>
                Alert.alert('Thread Name', `thread nane: ${threadName}`, null)
              ).catch(err => Alert.alert('Thread Name', `get thread nane error: ${err.message}`, null));
            }}
        />
      </View>
    );
  }
}

const Button = ({ title, style, pressHandler }) => {
  return (
    <TouchableOpacity style={[styles.button, style,]} onPress={pressHandler}>
      <Text style={{ textAlign: 'center', }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
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
