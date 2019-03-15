
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Button,Divider,Input} from 'react-native-elements';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Chat extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <Header placement="left"
      leftComponent={
    <Icon  containerStyle={{marginBottom:8}}
    name="ios-arrow-round-back"
    type="ionicon"
    color="black"
    size={40}
  
    />
      }
      centerComponent={{ text: 'Candy', style: { color: 'black',fontSize:20,marginBottom:10} }}
      rightComponent={
        <View style={{flexDirection:'row',marginBottom:8}}>
          
  <Icon containerStyle={{marginRight:10}}
  name="ios-image"
  type="ionicon"
  color="black"
  size={30}
  />
  
          <Icon name="ios-options"
    type="ionicon"
    color="black"
    size={30}
    />
        </View>
      }
      containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
      borderTopRightRadius:15,
      height: Platform.OS === 'ios' ? 70 :  70 - 10}}
      />
     
      <KeyboardAwareScrollView>
      <View>
        <View style={{alignItems:'flex-end',marginRight:5,marginTop:10}}>
        <View style={{flexDirection:'row',backgroundColor:'gray',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text style={{color:'white'}}>Hey</Text>
           <Text style={{marginLeft:5,color:'white'}}>1:42</Text>
         </View>
         <View style={{flexDirection:'row',backgroundColor:'gray',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text style={{color:'white'}}>I Like your product</Text>
           <Text style={{marginLeft:5,color:'white'}}>1:43</Text>
         </View>
         <View style={{flexDirection:'row',backgroundColor:'gray',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text style={{color:'white'}}>Can you sent me a more accurate pic?</Text>
           <Text style={{marginLeft:5,color:'white'}}>1:44</Text>
         </View>
         <View style={{flexDirection:'row',backgroundColor:'gray',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text style={{color:'white'}}>please?</Text>
           <Text style={{marginLeft:5,color:'white'}}>1:44</Text>
         </View>
        </View>
      </View>
      <View>
        <View style={{alignItems:'flex-start',marginLeft:5,marginTop:10,marginBottom:10}}>
        <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text>Hey</Text>
           <Text style={{marginLeft:5}}>1:48</Text>
         </View>
         <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text>Thanks</Text>
           <Text style={{marginLeft:5}}>1:50</Text>
         </View>
         <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text>I will send you in a bit moment</Text>
           <Text style={{marginLeft:5}}>1:51</Text>
         </View>
         <View>
         <Image
            style={{width:100, height:100,borderRadius:8}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
       </View>
       <View style={{flexDirection:'row',backgroundColor:'white',borderColor:'black',borderWidth:1,padding:10,marginBottom:5,borderRadius:20}}>
           <Text>I will send you in a bit moment</Text>
           <Text style={{marginLeft:5}}>1:51</Text>
         </View>
        </View>
      </View>
      </KeyboardAwareScrollView>
      <View style={{backgroundColor:'aqua',position: 'absolute', left: 0, right: 0, bottom: 0,height:60,width:'100%'}}>
     <Input
 placeholder='Write message....'
 shake={true}
 inputContainerStyle={{width:245,backgroundColor:'white',borderRadius:15,borderColor:'black'}}
 containerStyle={{marginBottom:5,height:30,marginTop:10}}
/>
<Icon
         reverse
         name='ios-send'
         type='ionicon'
         color='black'
         containerStyle={{position: 'absolute',right: 0, bottom: 0,marginTop:10,marginLeft:10}}
       />
     </View>
     </View>
    );
  }
}

