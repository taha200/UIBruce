
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield'


export default class LoginScreen extends Component{
    state={
        name:"",
        pass:"",
        phone:''
      }
      render(){
        return(
          <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{marginTop:95,alignItems:'center'}}>
              <Text style={{color:'black',fontSize:40}}>My App</Text>
            </View>
          
            <TextField 
            label='Username'
            value={this.state.name}
            onChangeText={ (name) => this.setState({ name }) }
            tintColor="#10e8aa"
            containerStyle={{marginLeft:15,marginRight:15,marginTop:10}}
            
          />
                   <TextField 
            label='Password'
            value={this.state.name}
            onChangeText={ (name) => this.setState({ name }) }
            tintColor="#10e8aa"
            containerStyle={{marginLeft:15,marginRight:15,marginTop:10}}
            
          />
            
          
          
          <View style={{alignItems:'center',justifyContenty:'center',marginTop:70}}>
          <Button title="Login" onPress={()=>this.props.navigation.navigate('HomeScreen')} containerStyle={{borderRadius:15,width:'80%',marginBottom:5}}  buttonStyle={{backgroundColor:'aqua'}} />
            <Button title="Register Free" onPress={()=>this.props.navigation.navigate('Signup')}  containerStyle={{borderRadius:15,width:'80%'}}  buttonStyle={{backgroundColor:'aqua'}} />
         </View>
    
     </View>
        
        )
      }
}