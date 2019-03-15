import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableHighlight,Image,Alert,FlatList} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button} from 'react-native-elements';

 export default class Conversation extends Component{
     render(){
         return(
            <View style={{flex:1}}>
            <Header  placement="left"
                  leftComponent={
                <Icon  containerStyle={{marginBottom:8}}
                name="ios-arrow-round-back"
                type="ionicon"
                color="white"
                size={40}
                onPress={() => this.props.navigation.goBack()}
                />
                  }
                  centerComponent={{ text: 'Conversations', style: { color: 'white',fontSize:22,marginBottom:10} }}
                  containerStyle={{backgroundColor:'purple',
                  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
                  />
                  <ScrollView>
                    <View style={{flexDirection:'row'}}>
                    <Avatar containerStyle={{marginLeft:5,marginTop:15}}
                   size="medium"
                   rounded
                   source={{
                     uri:
                       'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                   }}
                 />  
                 <View style={{marginLeft:15,marginTop:20,borderBottomColor:'#f2f3f4',borderBottomWidth:2,paddingBottom:15,flexBasis:'70%'}}>
                     <Text style={{fontSize:20,fontWeight:"bold"}}>Najam</Text>
                     <Text>no. dedu</Text>
                 </View>
                    </View>
                  </ScrollView>
                         </View>
         )
     }
 }