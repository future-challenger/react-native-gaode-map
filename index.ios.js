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
} from 'react-native';

import {
  StatusBar,
  requireNativeComponent,
  // Dimensions,
} from 'react-native'


import AppNavigator from './app/AppNavigator'

export default class mobike extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('mobike', () => mobike);
