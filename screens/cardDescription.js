import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import MapView from 'react-native-maps'
import Modal from 'react-native-modal'




export default class CardDesp extends Component {
constructor(props){
  super(props);
  this.state={
    Despmodal:this.props.showDpModal
  }
}

_toggleDespModal = () =>
this.setState({ Despmodal: !this.state.Despmodal });
UNSAFE_componentWillReceiveProps(newProps){
  this.setState({
    Despmoadal:newProps.showDpModal
  })
}
    render(){
      console.log(this.state.Despmodal)
      return(
   <Modal isVisible={this.state.Despmodal} style={{borderRadius:15,
       backgroundColor:'white',
       margin:0
       }}>
       <View style={{flex:1}}>
     
       <Header 
       leftComponent={
     <Icon  containerStyle={{marginBottom:8}}
     name="ios-arrow-round-back"
     type="ionicon"
     color="black"
     size={40}
     onPress={this._toggleDespModal}
     />
       }
       rightComponent={
         <View style={{flexDirection:'row',marginBottom:8}}>
           
   <Icon containerStyle={{marginRight:10}}
   name="ios-heart-empty"
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
         <ScrollView>
       <View style={{alignItems:'center',marginTop:10}}>
       <Image
             style={{width: 250, height:250,borderRadius:8}}
             source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
           />
       </View>
       <View style={{marginLeft:10,marginTop:10,paddingBottom:5,borderBottomColor:'gray',borderBottomWidth:2,marginRight:10}}>
         <Text style={{fontSize:50,fontWeight:'bold',color:'black'}} >React</Text>
         <Text style={{fontSize:30,fontWeight:'bold',color:'black'}} >$50</Text>
         <Text style={{fontSize:15,color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
   
       </View>
       <View style={{marginLeft:10,marginTop:10,paddingBottom:10,borderBottomColor:'gray',borderBottomWidth:2,marginRight:10}}>
       <MapView style={{width:'100%',height:200,marginTop:5}} region={{
           longitude:40.7128,
           latitude: 74.0060,
           longitudeDelta:0.1,
           latitudeDelta:0.1
         }}>
       
         </MapView>
       </View>
       <View style={{flexDirection:'row',marginLeft:10,marginTop:15,paddingBottom:10,borderBottomColor:'gray',borderBottomWidth:2,marginRight:10}}>
       <Avatar
       size="medium"
       rounded
       source={{
         uri:
           'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
       }}
     />  
     <View style={{marginLeft:15}}>
       <Text style={{fontFamily:"srisakdi",fontSize:20,fontWeight:'bold',color:'black',marginBottom:5}}>ALI</Text>
       <Rating 
     type='star'
     ratingCount={5}
     imageSize={20}
   />
     </View>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginLeft:20,marginTop:15,paddingBottom:10,borderBottomColor:'gray',borderBottomWidth:2,marginRight:10}}>
       <SocialIcon iconSize={15}
     type='twitter'
   />
   <SocialIcon iconSize={15}
     type='facebook'
   />
   <SocialIcon iconSize={15}
     type='gitlab'
   />
   <SocialIcon iconSize={15}
     type='medium'
   />
   <SocialIcon iconSize={15}
     type='instagram'
   />
       </View>
       <View style={{marginLeft:10,marginTop:15,paddingBottom:5,borderBottomColor:'gray',borderBottomWidth:2,marginRight:10}}>
       </View>
       </ScrollView>
       <View style={{backgroundColor:'aqua',position: 'absolute', left: 0, right: 0, bottom: 0,height:40,width:'100%',alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Chat</Text>
         </View>
   </View>
   </Modal>
      )
    }
   }
   