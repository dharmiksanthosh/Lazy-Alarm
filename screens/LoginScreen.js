import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet, Platform, Keyboard, Modal, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase';
import Constants from 'expo-constants';
//import db from '../config';

export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            password:'',
            email:'',
            isModalVisible: false,
            first_name: '',
            last_Name: '',
            address: '',
            contact: '',
            comfirmPassword: ''
        }
    }
    login = async (email,password)=>{
        if (email && password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                    .then(()=>{
                        console.log('Login Successful')
                        this.props.navigation.navigate('Calculate')
                    })
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                            Alert.alert('User does not exists', 'User Does Not Exist, please Sign Up');
                            console.log('User does not exists');
                        break;
                    case 'auth/invaild-email':
                            Alert.alert('Incorrect email or password');
                            console.log('incorrect email or password');
                        break;
                    default:

                        break;
                }
            }
        } else {
            Alert.alert('Enter Email and Password')
        }
    }
    render(){
        return(
          <SafeAreaProvider>
            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={[styles.container,{paddingTop:Constants.statusBarHeight}]}>
                
                    <View>
                        <Header
                          centerComponent={{ text: 'Lazy Alarm', style: { color: 'black', fontSize:18, margin: 10,fontWeight:"bold" }}}
                          backgroundColor='#A32CC4'/>
                    <View style={{alignItems:'center'}}>
                      <Image
                          style={{width:250,height:250}}
                          source={require('../assets/login.png')}/>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',alignSelf:'center',marginBottom:15}}>
                            <Image style={{width:25,height:20,marginRight:-32,marginTop:7}} source={require('../assets/mail.png')}/>
                            <TextInput
                                style={styles.input}
                                placeholder="abc@example.com"
                                keyboardType="email-address"
                                onChangeText={(text)=>{this.setState({email:text})}}/>
                        </View>
                        <View style={{flexDirection:'row',alignSelf:'center'}}>
                            <Image style={{width:25,height:20,marginRight:-32,marginTop:7}} source={require('../assets/pw.png')}/>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                secureTextEntry={true}
                                onChangeText={(text)=>{this.setState({password:text})}}/>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.login,{marginTop:10}]}
                            onPress={()=>{
                                this.login(this.state.email,this.state.password)
                            }}>
                                <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                     <View>
                        <TouchableOpacity
                            style={[styles.login,{marginTop:10}]}
                            onPress={()=>{
                                this.props.navigation.navigate('SignUp')
                            }}>
                                <Text style={styles.loginText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    input: {
        width:250,
        height:35,
        borderWidth:2,
        borderRadius:10,
        paddingLeft:35
    },
    login: {
        height:30,
        width:90,
        borderWidth:2,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#A32CC4',
        alignSelf: 'center'
    },
    inputView: {
      marginTop:100
    }
  }); 