import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends Component {
  static navigationOptions = ({}) => {
    return {}
  }

  render(){
    return(
      <View>
        <Text>Auth screen</Text>
      </View>
    )
  }
}

export default AuthScreen;