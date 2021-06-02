import * as React from 'react';
import { View, Text} from 'react-native';
import Header from '../components/Header';

export default class Calculate extends React.Component{
    constructor(){
        super();
        this.state={
            userWeight: 0,
            userAge: 0,
            dailyWaterIntake: 0,
        }
    }
    render(){
        return(
            <View>
                <Header
                  title='Calculate'
                  navigation={this.props.navigation}
                />
                <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
                  <Text>Calculate Screen</Text>
                </View>
            </View>
        )
    }
}