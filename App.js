/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import {Header,Icon,Button,SearchBar} from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';





import DrawerNavigator from './navigation/Drawer'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Header  statusBarProps={{ translucent: true }} containerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24}}
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={
    <SearchBar
    placeholder="Search..."
    onChangeText={this.updateSearch}
    inputContainerStyle={{width:215,borderRadius:8}}
    
    containerStyle={{borderRadius:8,height:50}}
  />
    }
  rightComponent={{ icon:"settings", color: '#fff'}}
  containerStyle={
    {
      backgroundColor:'purple'
    }
  }
/>
<ScrollView>
<ScrollView horizontal={true} style={{paddingBottom:10,height:80}}>
<Icon
        reverse
        name='ios-american-football'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-car'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-airplane'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-laptop'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-umbrella'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-car'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-tablet-portrait'
        type='ionicon'
        color='black'
      />
      <Icon
        reverse
        name='ios-subway'
        type='ionicon'
        color='black'
      />
</ScrollView>

<View style={{flex:1,marginTop:5}}>
<Card>
  <CardImage 
    source={{uri: 'http://placehold.it/480x270'}} 
    title="Above all i am here"
  />
  <CardTitle 
    title="This is a title" 
    subtitle="This is subtitle"
   />
  <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
  <CardAction 
    separator={true} 
    inColumn={false}>
    <CardButton
      onPress={() => {}}
      title="Push"
      color="blue"
    />
    <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    />
  </CardAction>
</Card>
<Card>
  <CardImage 
    source={{uri: 'http://placehold.it/480x270'}} 
    title="Above all i am here"
  />
  <CardTitle 
    title="This is a title" 
    subtitle="This is subtitle"
   />
  <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
  <CardAction 
    separator={true} 
    inColumn={false}>
    <CardButton
      onPress={() => {}}
      title="Push"
      color="blue"
    />
    <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    />
  </CardAction>
</Card>

</View>
</ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  }
});
