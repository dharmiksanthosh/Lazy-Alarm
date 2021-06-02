import * as React from 'react';
import { View, Text} from 'react-native';
import Header from '../components/Header';

export default class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View>
                <Header
                  title='Home'
                  navigation={this.props.navigation}
                />
                <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
                  <Text>Calculate Screen</Text>
                </View>
            </View>
        )
    }
}