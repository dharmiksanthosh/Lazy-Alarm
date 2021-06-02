import * as React from 'react';
import { View } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { DrawerActions } from 'react-navigation-drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class MyHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <SafeAreaProvider>
            <Header
                leftComponent={<Icon name='bars' type='font-awesome' color='white' onPress={()=>{
                    this.props.navigation.navigate('SideBarMenu');
                    this.props.navigation.dispatch(DrawerActions.openDrawer());
                }}/>}
                centerComponent={{ text: this.props.title, style: { color: 'black', fontSize:20,fontWeight:"bold" } }}
                backgroundColor='#A32CC4'/>
          </SafeAreaProvider>
        )
    }
}
