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
  View
} from 'react-native';

import {
  StatusBar,
  requireNativeComponent,
  // Dimensions,
} from 'react-native'
// var {height, width} = Dimensions.get('window');

// const SCREEN_HEIGHT = height;
// const SCREEN_WIDTH = width;

const GDMapView = requireNativeComponent('GDMapView', null)

export default class mobike extends Component {
  render() {
    //zoomEnabled={true} zoom={13} showsCompass={false}
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="dark-content"
        />
        <GDMapView
          style={{ flex: 1, marginTop: 20,}}
          marker={{
            category: 1,
            latitude: 39.892520,
            longitude: 116.336370,
          }} showsCompass={false}
          markers={[
            {
              category: 2,
              latitude: 39.998293,
              longitude: 116.352343,
            },
            {
              category: 2,
              latitude: 40.001442,
              longitude: 116.353915,
            },
            {
              category: 2,
              latitude: 39.979590,
              longitude: 116.324219,
            },
            {
              category: 1,
              latitude: 39.989105,
              longitude: 116.353915,
            },
            {
              category: 1,
              latitude: 39.998293,
              longitude: 116.324219,
            }
          ]}
          zoom={10}
          centerCoordinate={{ latitude: 39.909520, longitude: 116.336170 }}
          showScale={false} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'SR',
    backgroundColor: 'white',
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

AppRegistry.registerComponent('mobike', () => mobike);
