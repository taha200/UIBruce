/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import GridLayout from 'react-native-layout-grid';
import Leftarrow from './components/leftarrow'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MapView from 'react-native-maps'
import Modal from 'react-native-modal'
import {TextField} from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Chat from './screens/chat'
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import DrawerNavigator from './navigation/Drawer'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
        
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          image: 'https://facebook.github.io/react/img/logo_og.png',
        },
      ],
    })
  }

  renderCustomContainer= ()=>{
    return(
      <View style={{backgroundColor:'aqua',color:'white'}}><Text>cjacefhebchbe</Text></View>
    )
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
      backgroundColor: 'aqua',
    }
        }}
       />
    );
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <DrawerNavigator />
  //     <View style={{flex:1}}>
  //        <Header placement="left"
  //     leftComponent={
  //   <Icon  containerStyle={{marginBottom:8}}
  //   name="ios-arrow-round-back"
  //   type="ionicon"
  //   color="black"
  //   size={40}
  
  //   />
  //     }
  //     centerComponent={{ text: 'Candy', style: { color: 'black',fontSize:20,marginBottom:10} }}
  //     rightComponent={
  //       <View style={{flexDirection:'row',marginBottom:8}}>
          
  // <Icon containerStyle={{marginRight:10}}
  // name="ios-image"
  // type="ionicon"
  // color="black"
  // size={30}
  // />
  
  //         <Icon name="ios-options"
  //   type="ionicon"
  //   color="black"
  //   size={30}
  //   />
  //       </View>
  //     }
  //     containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
  //     borderTopRightRadius:15,
  //     height: Platform.OS === 'ios' ? 70 :  70 - 10}}
  //     />
  //     <GiftedChat

  //       messages={this.state.messages}
  //       onSend={messages => this.onSend(messages)}
  //       renderBubble={this.renderBubble.bind(this)}
  //       user={{
  //         _id: 1,
  //       }}
    
  //     />
    
  //     </View>
    )
  }
}

