import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Login</Text>
      </View>
    )
  }
}