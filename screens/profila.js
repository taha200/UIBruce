import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableHighlight,Image,Alert} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button} from 'react-native-elements';
import Modal from 'react-native-modal'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import OnSale from "../components/onsale"
import Favourites from '../components/favourites'
import Review from '../components/review'
import Info from '../components/info'
import Profiles from '../components/profile'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Profila extends Component {

  render() {
    
 
    return (
    
          <View style={{flex: 1}}>
       <Header 
       leftComponent={
     <Icon  containerStyle={{marginBottom:8}}
     name="ios-arrow-round-back"
     type="ionicon"
     color="black"
     size={40}
     onPress={() => this.props.navigation.navigate('HomeScreen')}
     />
       }
       rightComponent={
         <View style={{flexDirection:'row',marginBottom:8}}>
           
   <Icon containerStyle={{marginRight:10}}
   name="ios-boat"
   type="ionicon"
   color="black"
   size={30}
   onPress={()=>this.props.navigation.navigate('Shipping')}
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
<View style={{flexDirection:'row'}}>
  <View style={{flexBasis:'75%'}}>
      <Text style={{fontSize:30,fontWeight:'bold',marginTop:10,marginLeft:5}}>TAHA ALI</Text>
      <Rating style={{alignItems:'flex-start',marginLeft:5}}
  type='star'
  ratingCount={5}
  imageSize={15}
/>
  </View>
  <Avatar containerStyle={{flexBasis:'25%',marginTop:5}}
  size="large"
  rounded
  title="CR"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
</View>
<View style={{marginTop:10,alignItems:'center'}}>
  <Button buttonStyle={{width:300,borderRadius:15}} title="Become Pro"/>
</View>
<View style={styles.spCount}>
<View style={{flexDirection:'row',marginTop:5,marginLeft:7}}>
<Icon containerStyle={{marginRight:5}}
    name='ios-stats'
    type='ionicon'
    color='black'
  />
  <Text style={{fontWeight:'bold',marginTop:5}}>0</Text>
  <Text style={{marginTop:5,marginLeft:5}}>Sales</Text>
  <Text style={{fontWeight:'bold',marginTop:5,marginLeft:5}}>0</Text>
  <Text style={{marginTop:5,marginLeft:5}}>Purchases</Text>
</View>
<Text style={{marginLeft:25,marginTop:5}}>Distance Not Available Add</Text>
</View>
<ScrollableTabView
    style={{marginTop: 20}}
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
  <OnSale tabLabel="OnSale(0)"/>
  <Favourites tabLabel="Favourites(0)"/>
  <Review tabLabel="Review(0)"/>
  <Profiles tabLabel="Profiles(0)"/>
  <Info tabLabel="Info"/>

  </ScrollableTabView>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    height: Platform.OS === 'ios' ? 70 :  70 - 24
  },
  modal:{
    borderRadius:15,
    backgroundColor:'white',
    margin:0
  },
  spCount:{
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
    paddingBottom:15,
    borderTopWidth:1,
    borderTopColor:'lightgray',
    paddingTop:10
  }
})