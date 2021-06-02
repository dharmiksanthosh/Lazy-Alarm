import * as React from 'react';
import { View } from 'react-native';
import Header from '../components/Header'

export default class UserDetail extends React.Component{
  render(){
    return(
      <View>
        <Header
              title='Profile'
              navigation={this.props.navigation}
            />
      </View>
    )
  }
}