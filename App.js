import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Drawer, StackNavigator, TabNavigator } from 'react-navigation';
import Expo, { Constants } from 'expo';

//Navigation
import AuthScreen from './screens/AuthScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      auth: { screen: AuthScreen }
    }, { headerMode: 'none' })

    return (
      <View style={styles.container}>
      <View style={Platform.OS === 'android' ? styles.statusBar : {} }/>
        <MainNavigator
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar: {
    backgroundColor: '#009480',
    height: Constants.statusBarHeight
  }
});
