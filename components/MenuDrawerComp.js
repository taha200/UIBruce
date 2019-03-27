import React from 'react'
import {StyleSheet,Platform,Dimensions,View,Text,TouchableOpacity,FlatList} from'react-native'
import {Avatar,Button,Icon,Header} from 'react-native-elements'
const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height
import Modal from 'react-native-modal'

export default class MenuDrawer extends React.Component{
    state={
        data:[{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'}],
        ismodalVisible:false
    }
    Openmodal=()=>{
        this.setState({
            ismodalVisible:true
        })
    }
    Closemodal=()=>{
        this.setState({
            ismodalVisible:false
        })
    }
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
     {this.navLink('Conversation','Conversation')}
     </View>
     <View style={{alignItems:'center',justifyContent:'flex-end'}}>
          <View style={{position: 'absolute',
      width:180,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#d66933',
      borderRadius:10,
      marginTop:50,
      top:'50%',
      bottom:'10%',
      marginBottom:15
      }}>
            <Button title="All categories" onPress={this.Openmodal} buttonStyle={{backgroundColor:'#d66933',height:40}}/>
          </View>
          </View>
          <Modal isVisible={this.state.ismodalVisible} style={{backgroundColor:'white',marginBottom:0,marginTop:0,marginLeft:0,marginRight:'17.5%',borderRadius:8}} onBackButtonPress={this._toggleModal} swipeDirection="down" onSwipeComplete={this._toggleModal}>
   <View style={{flex:1}}>
   <Header placement="left"
    leftComponent={
    <Icon  containerStyle={{marginBottom:8}}
    name="ios-arrow-round-back"
    type="ionicon"
    color="black"
    size={40}
    onPress={this.Closemodal}
   />
      }
      containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
      borderTopRightRadius:15,
      height: Platform.OS === 'ios' ? 70 :  70 - 10}}
      />
   <Text style={{textAlign:"center",fontSize:25,fontWeight:'bold',marginTop:10}}>Categories</Text>
   <FlatList data={this.state.data} keyExtractor={()=>`item${Math.round(Math.random()*10000)}`} renderItem={({item})=>
  <View style={{paddingBottom:10,borderBottomColor:'orange',borderBottomWidth:2,flexDirection:'row'}}>
     <Icon
     containerStyle={{marginTop:12,marginLeft:10}}
          name={item.iconname}
          type='material-community'
          color='darkred'
          size={24}
        />
  <Text style={{fontSize:20,marginLeft:10,marginRight:10,paddingTop:10}}>{item.text}</Text>
  </View>
  } 
  />
     </View>
    </Modal>

    </View>
    )
}
}
