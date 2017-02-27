import React from 'react';
import {
  View,
  Navigator,
} from 'react-native';

// scenes
import Login from './Login'
import Search from './Search'
import BikeApp from './BikeApp'

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props)

    this._renderScene = this._renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        configureScene={(route) => {

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

    return <BikeApp />
  }
}