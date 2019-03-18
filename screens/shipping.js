/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView,Picker} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield'

import {Dropdown} from 'react-native-material-dropdown'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Shipping extends Component {
  state = {
    price:"",
    messages: [{
      value: 'Others',
    }]
  }

  
  
  render() {
    const Company=[{
      value:'TCS'
    },{
      value:'Fedex'
    }]
    return (
  <View style={{flex:1}}>
     <Header placement="left"
      leftComponent={
    <Icon  containerStyle={{marginBottom:8}}
    name="ios-arrow-round-back"
    type="ionicon"
    color="black"
    size={40}
    onPress={()=>this.props.navigation.navigate('Profila')}
  
    />
      }
      centerComponent={{ text: 'Shipping', style: { color: 'black',fontSize:20,marginBottom:10} }}
      containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
      borderTopRightRadius:15,
      height: Platform.OS === 'ios' ? 70 :  70 - 10}}
      />
      <ScrollView>
   <View style={{marginTop:25,marginLeft:15}}>
              <Text style={{color:'#963396',fontSize:30}}>Standard Shipping</Text>
            </View>
            <View style={{borderBottomColor:'gray',borderBottomWidth:1,paddingBottom:10}}>
            <View style={{marginTop:15,marginLeft:15}}>
              <Text style={{color:'#963396',fontSize:22}}>Domestic</Text>
            </View>
<Dropdown containerStyle={{marginLeft:15,marginRight:15}} 
        label='Company'
        value="TCS"
      data={Company}

/>
<TextField
        label='Charges'
        suffix="$"
        value={this.state.price}
        onChangeText={(price) => this.setState({price }) }
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <TextField
      suffix="$"
        label='Additional Charges'
    
        onChangeText={ (price) => this.setState({price}) }
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <View style={{marginLeft:7,marginTop:7,flexDirection:'row'}}>
      <View style={{flexBasis:'45%'}}>
      <TextField
        label='Delievery Time'
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      <View style={{flexBasis:'10%',marginTop:35,paddingLeft:10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>to</Text>
      </View>
      <View style={{flexBasis:'45%'}}>
      <TextField
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      </View>
      </View>
      <View>
            <View style={{marginTop:15,marginLeft:15}}>
              <Text style={{color:'#963396',fontSize:22}}>International</Text>
            </View>
<Dropdown containerStyle={{marginLeft:15,marginRight:15}} 
        label='Company'
        value="TCS"
      data={Company}

/>
<TextField
        label='Charges'
        value={this.state.price}
        onChangeText={(price) => this.setState({price }) }
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <TextField
        label='Additional Charges'
    
        onChangeText={ (price) => this.setState({price}) }
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <View style={{marginLeft:7,marginTop:7,flexDirection:'row'}}>
      <View style={{flexBasis:'45%'}}>
      <TextField
        label='Delievery Time'
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      <View style={{flexBasis:'10%',marginTop:35,paddingLeft:10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>to</Text>
      </View>
      <View style={{flexBasis:'45%'}}>
      <TextField
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      </View>
      </View>
        </ScrollView>
  </View>
   
    )
  }
}

