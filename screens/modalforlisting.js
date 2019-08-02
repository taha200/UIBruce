import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,CheckBox} from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import GridLayout from 'react-native-layout-grid';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MapView from 'react-native-maps'
import Modal from 'react-native-modal'
import {TextField} from 'react-native-material-textfield'
import {Dropdown} from 'react-native-material-dropdown'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as loc,
  removeOrientationListener as rol} from 'react-native-responsive-screen';
export default class Modals extends Component{
  
  constructor(props){
    super(props);
    this.state={
      isCatModalVisible:this.props.showModal,
      isFormModalVisible:false,
      name:"",
      Male:true,
      Female:false,
      National:true,
      International:true
    }
  }
  UNSAFE_componentWillReceiveProps(newProps){
    this.setState({
      isCatModalVisible:newProps.showModal
    })
  }
  getNational=()=>{
    this.setState({
National:true
    })
  }
  getInternational=()=>{
    this.setState({
Intenational:true
    })
  }
  genderChange = ()=>{
    this.setState({
    Male:!this.state.Male,
    Female:!this.state.Female
    })
    }
  _toggleModalCat = () =>
    this.setState({ isCatModalVisible: !this.state.isCatModalVisible });
    _toggleModalForm = () =>
    this.setState({ isFormModalVisible: !this.state.isFormModalVisible });
render(){
  console.log(this.state.isCatModalVisible)
  const Currency=[{
    value:'USD'
  },{
    value:'PKR'
  }]

  return(
    <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
  <Modal isVisible={this.state.isCatModalVisible} style={{borderRadius:15,
       backgroundColor:'white',
       margin:0
       }} swipeDirection="down" onBackButtonPress={this._toggleModalCat} onSwipeComplete={this._toggleModalCat}>
          <View style={{flex:1}}>
<View style={{borderBottomColor:'gray',borderBottomWidth:2,paddingBottom:5}}>
  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>All Categories</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
  <View>
  <Icon
          reverse
          name='ios-book'
          type='ionicon'
          color='black'
          onPress={this._toggleModalForm}
        />
    <Text style={{alignSelf:'center'}}>Books</Text>
  </View>
  <View>
  <Icon   name='ios-car'
          type='ionicon'
          color='black'
      reverse
      onPress={this._toggleModalForm}
          />
    <Text style={{alignSelf:'center'}}>Car</Text>
  </View>
  <View>
  <Icon   name='ios-bicycle'
          type='ionicon'
          color='black'
      reverse
      onPress={this._toggleModalForm}
          />
    <Text style={{alignSelf:'center'}}>Motorcycle</Text>
  </View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
  <View>
  <Icon   name='ios-camera'
          type='ionicon'
          color='black'
      reverse
      onPress={this._toggleModalForm}
          />
    <Text style={{alignSelf:'center'}}>Cameras</Text>
  </View>
  <View>
  <Icon   name='ios-american-football'
          type='ionicon'
          color='black'
      reverse
      onPress={this._toggleModalForm}
          />
    <Text style={{alignSelf:'center'}}>Sports</Text>
  </View>
  <View>
  <Icon   name='ios-musical-notes'
          type='ionicon'
          color='black'
      reverse
      onPress={this._toggleModalForm}
          />
    <Text style={{alignSelf:'center'}}>Instruments</Text>
  </View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
  <View>
    <Icon   name='ios-laptop'
          type='ionicon'
          color='black'
      reverse
      onPress={this._toggleModalForm}
          />
    <Text style={{alignSelf:'center'}}>Laptops</Text>
  </View>
</View>
          </View>
        </Modal>
   <Modal isVisible={this.state.isFormModalVisible} style={{ borderRadius:15,
    backgroundColor:'white',
    margin:0}}>
    <View style={{flex:1}}>
  <View style={{flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:2,paddingBottom:5}}>
  <TouchableOpacity onPress={this._toggleModalForm}><Text style={{fontSize:30,marginLeft:10,marginTop:10}}>X</Text></TouchableOpacity>
  <Text style={{fontSize:20,marginLeft:20,marginTop:20,fontWeight:'bold'}}>Listing In Laptops</Text>
  <Icon
  name='ios-arrow-dropdown'
  type='ionicon'
  color='black'
  size={15}
  containerStyle={{marginTop:25}}
   />
  </View>
  <ScrollView>
  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:10}}>
    <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:10}}>
    <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  <Icon   
  name='ios-image'
  type='ionicon'
  color='gray'
  size={70}
  />
  </View>
  <View>
    <KeyboardAvoidingView>
  <TextField
        label='Title'
        value={this.state.name}
        onChangeText={ (name) => this.setState({ name }) }
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
        <TextField
        label='Description'
        value={this.state.name}
        onChangeText={ (name) => this.setState({ name }) }
        tintColor="#10e8aa"
        containerStyle={{marginLeft:15,marginRight:15}}
   characterRestriction={600}
      />
      </KeyboardAvoidingView>
      <View style={{marginLeft:7,marginTop:7,flexDirection:'row'}}>
      <View style={{flexBasis:'68%'}}>
      <TextField
        label='Price'
        tintColor="#10e8aa"
        containerStyle={{marginLeft:7,marginRight:15}}
      />
      </View>
      <View style={{flexBasis:'30%'}}>
      <Dropdown containerStyle={{marginLeft:3,marginRight:8}} 
        label='Currency'
        value="USD"
      data={Currency}
/>
      </View>
      </View>

      <View style={{width:'100%',height:hp('9%'),backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
         <Text style={{marginLeft:10,color:'gray',fontSize:15,fontWeight:'bold'}}>Trade & Accept</Text>
      </View>
      <View style={{width:'100%',height:hp('11%'),backgroundColor:'white',flexDirection:'row',}}>
      <CheckBox
  title='Yes'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.Male}
  onPress={this.genderChange}
  checkedColor='aqua'
/>
<CheckBox
  center
  title='No'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.Female}
  onPress={this.genderChange}
  containerStyle={{marginLeft:25}}
  checkedColor='aqua'
/>

      </View>
      <View style={{width:'100%',height:hp('9%'),backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
         <Text style={{marginLeft:10,color:'gray',fontSize:15,fontWeight:'bold'}}>Shipping</Text>
      </View>
      <View style={{width:'100%',height:hp('11%'),backgroundColor:'white',flexDirection:'row',}}>
      <CheckBox
  title='National'
 checked={this.state.National}
checkedColor='aqua'
onPress={this.getNational}
/>
<CheckBox
  center
  title='International'
  checked={this.state.International}
  containerStyle={{marginLeft:25}}
  checkedColor='aqua'
  onPress={this.getInternational}
/>

      </View>
  </View>
  <View style={{alignItems:'center',marginTop:10,marginBottom:10}}>
  <TouchableOpacity style={{width:wp('90%'),height:hp('8%'),backgroundColor:'aqua',borderRadius:15,alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize:20}}>List Item</Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
    </View>

   </Modal>
        </View>
  )
}
}