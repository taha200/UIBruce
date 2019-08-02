import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import GridLayout from 'react-native-layout-grid';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MapView from 'react-native-maps'
import Modal from 'react-native-modal'
import {TextField} from 'react-native-material-textfield'

export default class Signup extends Component{
    state={
        name:"",
        pass:"",
        phone:''
      }
      render(){
        return(
          <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{marginTop:35,marginLeft:20}}>
              <Text style={{color:'aqua',fontSize:40}}>Join Wallapop</Text>
            </View>
            <TextField style={{alignSelf:'center'}}
            label='Name and Surname'
            value={this.state.name}
            onChangeText={ (name) => this.setState({ name }) }
            tintColor="#10e8aa"
            containerStyle={{marginLeft:15,marginRight:15,marginTop:20}}
            
          />
          
            <TextField style={{alignSelf:'center'}}
            label='Username'
            value={this.state.name}
            onChangeText={ (name) => this.setState({ name }) }
            tintColor="#10e8aa"
            containerStyle={{marginLeft:15,marginRight:15}}
            
          />
          
            <TextField style={{alignSelf:'center'}}
            label='Password'
            value={this.state.pass}
            onChangeText={ (pass) => this.setState({ pass }) }
            tintColor="#10e8aa"
            containerStyle={{marginLeft:15,marginRight:15}}
            
          />
          <View style={{marginLeft:20,marginTop:40,width:'70%'}}>
            <Text>By registering or signing in, you accept our Terms and Privacy Policy</Text>
          </View>
          
          
          <View style={{alignItems:'center',justifyContenty:'center'}}>
            <Button title="Register"  onPress={()=>this.props.navigation.navigate('HomeScreen')} containerStyle={{borderRadius:20,width:'80%'}}  buttonStyle={{backgroundColor:'aqua'}} />
         </View>
    
     </View>
        
        )
      }
}