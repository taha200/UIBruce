import React from 'react'
import {StyleSheet,Platform,Dimensions,View,Text,TouchableOpacity} from'react-native'
const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height

export default class MenuDrawer extends React.Component{
    navLink(nav,text){
     return(
         <TouchableOpacity onPress={()=>{}}>
             <Text>{text}</Text>
         </TouchableOpacity>
     )
    }
render(){
    return(  
    <View>
     <View>

     </View>
     <View >
     {this.navLink('HomeScreen','Home')}
     {this.navLink('Others','OthersScreen')}
     {this.navLink('Settings','SettingsScreen')}
     </View>
    </View>
    )
}
}
const styles=StyleSheet.create({
   container:{
       flex:1
   },
   toplink:{
       height:160,
       backgroundColor:'black'
   },
   bottomlink:{
      flex:1,
   }
})