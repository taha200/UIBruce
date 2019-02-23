import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import MenuButton from '../components/button'

export default class HomeScreen extends Component {
  render() {
    return (
       <View style={{flex:1}}>
       <View style={{width:'20%',marginLeft:'2%',marginTop:'3%',flexBasis:20}}>
       <MenuButton navigation={this.props.navigation} />
       </View>
      <View style={styles.container}>
       <Text style={styles.text}>HOME</Text>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexBasis:50
  },
  text:{
  fontSize:30
  }
});
