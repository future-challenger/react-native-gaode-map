import React from 'react';
import {

} from 'react-native';

// scenes
import Login from './Login'
import Search from './Search'

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
        renderScene={}
         />
    )
  }

  _renderScene(route, navigator) {
    if(route.login) {
      return <Login />
    }

    if(route.search) {
      return <Search />
    }
  }
}