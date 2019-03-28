
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,Alert,KeyboardAvoidingView,Dimensions} from 'react-native';
import {Avatar,Header,Icon,SearchBar,Divider,Input,Overlay,Rating,Button,SocialIcon} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as loc,
  removeOrientationListener as rol} from 'react-native-responsive-screen';
 
export default class LoginScreen extends Component{
    state={
        name:"",
        pass:"",
        phone:'',
        orientation:''
      }
      getOrientation = () =>
      {
        if( this.refs.rootView )
        {
            if( Dimensions.get('window').width < Dimensions.get('window').height )
            {
              this.setState({ orientation: 'portrait' });
            }
            else
            {
              this.setState({ orientation: 'landscape' });
            }
        }
      }
    
      componentDidMount() {
        loc(this);
        this.getOrientation();
    
        Dimensions.addEventListener( 'change', () =>
        {
          this.getOrientation();
        });
     
      }
      
      componentWillUnMount() {
        rol();
      }
      render(){
        return(
          <ScrollView ref="rootView" style={{flex:1,backgroundColor:'white'}}>
          <View style={{alignItems:'center',marginTop:2,width:wp('100%'),height:(this.state.orientation==="portrait")?hp('35%'):hp('88.5%')}}>
          <Image 
          
          source={require('./art.jpg')}
          style={{width:wp('80%'),height:(this.state.orientation==="portrait")?hp('35%'):hp('89%')}}
          />
          </View>
          <View   style={{width:wp('100%'),height:hp('15%')}}>
          <TextField 
          label='Email'
          value={this.state.name}
          onChangeText={ (name) => this.setState({ name }) }
          tintColor="orange"
          containerStyle={{marginLeft:15,marginRight:15,marginTop:2}}
          
        />
         <KeyboardAvoidingView>    
             <TextField 
          label='Password'
          value={this.state.name}
          onChangeText={ (name) => this.setState({ name }) }
          tintColor="orange"
          containerStyle={{marginLeft:15,marginRight:15,marginTop:10}}
          
        />
        </KeyboardAvoidingView>
           
          </View>
        
        
        <KeyboardAvoidingView style={{alignItems:'center',justifyContent:'center',marginTop:(this.state.orientation==='portrait')?0:130,width:wp('100%'),height:(this.state.orientation==="portrait")?hp('30%'):hp('50%')}}>
        <Button title="Login" onPress={()=>this.props.navigation.navigate('HomeScreen')} containerStyle={{borderRadius:15,width:'50%',marginBottom:5}}  buttonStyle={{backgroundColor:'darkorange',borderRadius:10}} />
        
         
          <Button title="Register Free" onPress={()=>this.props.navigation.navigate('Signup')}  containerStyle={{borderRadius:15,width:'50%'}}  buttonStyle={{backgroundColor:'orange'}} />
          <View style={{flexDirection:'row',marginTop:5}}>
         {/* <Icon   name='logo-facebook'
          type='ionicon'
          color='blue'
          size={35}
    
          />
          <Icon  
          containerStyle={{marginLeft:5,alignContent:'flex-end'}}
          name='ios-mail'
          type='ionicon'
          color='red'
          size={38}
    /> */}
     <TouchableOpacity>
       <Image source={require('./gmail.jpg')} style={{width:50,height:50,borderRadius:15}}/>
     </TouchableOpacity> 
     <TouchableOpacity>
       <Image source={require('./fb.jpg')} style={{width:50,height:50,borderRadius:15,marginLeft:5}} />
     </TouchableOpacity>
         </View>
      
       </KeyboardAvoidingView>
   </ScrollView>
      
        
        )
      }
}