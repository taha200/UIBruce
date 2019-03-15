import React from 'react'
import {StyleSheet,Platform,Dimensions,View,Text,TouchableOpacity} from'react-native'
import {Avatar} from 'react-native-elements'
const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height

export default class MenuDrawer extends React.Component{
    navLink(nav,text){
     return(
         <TouchableOpacity onPress={()=>{this.props.navigation.navigate(nav)}}>
             <Text style={{fontSize:15,fontWeight:'bold',marginLeft:20,marginTop:20}}>{text}</Text>
         </TouchableOpacity>
     )
    }
render(){
    return(  
    <View style={{flex:1}}>
     <View style={{backgroundColor:'black',height:160,width:'100%',flexDirection:'row'}}>
     <Avatar containerStyle={{marginLeft:30,marginTop:40}} onPress={()=>{this.props.navigation.navigate('Profila')}}
       size="large"
       rounded
       source={{
         uri:
           'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
       }}
     />  
     <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginLeft:10,marginTop:60}}>Hamza Ali</Text>
     </View>
     <View style={{marginTop:20}}>
     {this.navLink('HomeScreen','Home')}
     {this.navLink('Others','OthersScreen')}
     {this.navLink('Conversation','Conversation')}
     </View>
    </View>
    )
}
}
