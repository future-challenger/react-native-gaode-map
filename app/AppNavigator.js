import React from 'react';
import {
  View,
  Navigator,
  BackAndroid,
} from 'react-native';

// scenes
import Login from './Login'
import Search from './Search'
import BikeApp from './BikeApp'

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props)

    this._handlers = [];
    this._renderScene = this._renderScene.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackButton);
  }

  _handleBackButton() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  }

  _addBackButtonListener(listener) {
    this._handlers.push(listener);
  }

  _removeBackButtonListener(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        configureScene={(route) => {
          if(route.login) {
            return Navigator.SceneConfigs.FloatFromLeft;
          } else {
            return Navigator.SceneConfigs.FloatFromRight;
          }
        }}
        initialRoute={{}}
        renderScene={this._renderScene}
      />
    )
  }

  _renderScene(route, navigator) {
    if (route.login) {
      return <Login {...route} navigator={navigator} />
    }

    if (route.search) {
      return <Search {...route} navigator={navigator} />
    }

    return <BikeApp navigator={navigator} />
  }
}