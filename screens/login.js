
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
export default class LoginScreen extends Component{
    state={
        name:"",
        pass:"",
        phone:''
      }
      render(){
        return(
          <View style={{flex:1,backgroundColor:'white'}}>
          <View style={{alignItems:'center',marginTop:25}}>
          <Image 
          source={require('./art.jpg')}
          style={{width:wp('80%'),height:hp('30%')}}
          />
          </View>
         <KeyboardAvoidingView behavior="padding" enabled>
          <View   style={{width:wp('100%'),height:hp('20%')}}>
          <TextField 
          label='Email'
          value={this.state.name}
          onChangeText={ (name) => this.setState({ name }) }
          tintColor="orange"
          containerStyle={{marginLeft:15,marginRight:15,marginTop:2}}
          
        />
         
                 <TextField 
          label='Password'
          value={this.state.name}
          onChangeText={ (name) => this.setState({ name }) }
          tintColor="orange"
          containerStyle={{marginLeft:15,marginRight:15,marginTop:10}}
          
        />
          </View>
        
        
        <View style={{alignItems:'center',justifyContenty:'center',marginTop:75,width:wp('100%'),height:hp('20%')}}>
        <Button title="Login" onPress={()=>this.props.navigation.navigate('HomeScreen')} containerStyle={{borderRadius:15,width:'50%',marginBottom:5}}  buttonStyle={{backgroundColor:'darkorange',borderRadius:10}} />
          <Button title="Register Free" onPress={()=>this.props.navigation.navigate('Signup')}  containerStyle={{borderRadius:15,width:'50%'}}  buttonStyle={{backgroundColor:'orange'}} />
       </View>
       </KeyboardAvoidingView>
   </View>
      
        
        )
      }
}