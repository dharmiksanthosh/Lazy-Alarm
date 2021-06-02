import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUpScreen';
import Login from  './screens/LoginScreen';
import Calculate from './screens/Calculate';
import { AppDrawerNavigator } from './components/DrawerNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { AppDrawerNavigator } from './components/AppDrawerNavigator';
//import { AppTabNavigator } from './components/AppTabNavigator';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}
const switchNavigator = createSwitchNavigator({
  Login:{screen: Login},
  SignUp:{screen: SignUp},
  Calculate:{screen: Calculate},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator);