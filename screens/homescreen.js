import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import {Header,Icon,SearchBar,Button,Divider,Input,Card} from 'react-native-elements';
import GridLayout from 'react-native-layout-grid';
import Modal from 'react-native-modal'
import Modals from '../screens/modalforlisting'
import CardDesp from '../screens/cardDescription'
import ActionButton from 'react-native-action-button'
export default class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state={
        data:['categories1','categories2','categories3','categories4','categories5','categories6'],
        ismodalVisible:false,
        isCatModal:false,
        showDespModal:false
      }
    }
    _toggleModal = () =>
    this.setState({ ismodalVisible: !this.state.ismodalVisible });
    _toggleCatModal = () =>this.setState({ isCatModal: true });
    _toggleDModal = ()=>this.setState({showDespModal:true})
    
    _toggleCatCloseModal = () =>this.setState({ isCatModal:false });
    _toggleDCloseModal = ()=>this.setState({showDespModal:false})
    render() {
      return (
        <View style={styles.container}>
        
      <Header leftContainerStyle={{flexBasis:'10%',marginBottom:18}} centerContainerStyle={{flexBasis:"80%"}} rightContainerStyle={{flexBasis:'10%',marginBottom:22}}
       leftComponent={
     <Icon  
     name="ios-menu"
     type="ionicon"
     color="black"
     size={40}
      onPress={(e)=>{this.props.navigation.toggleDrawer(e)}}
     />
       }
       centerComponent={<Input 
        leftIcon={
          <Icon 
          name='ios-search'
                  type='ionicon'
                  color='gray'
          />
        }
          placeholder='Search'
          shake={true}
          inputContainerStyle={{width:"100%",backgroundColor:'white',borderRadius:15,borderBottomColor:'white'}}
          containerStyle={{marginBottom:23,height:45}}
        />}
       rightComponent={
         <Icon name="ios-options"
     type="ionicon"
     color="black"
     size={30}
     onPress={()=>this.props.navigation.navigate("Filter")}
     />
        
       }
       containerStyle={{backgroundColor:'white',
       height: Platform.OS === 'ios' ? 70 :  70 - 10}}
       />
  <ScrollView>
    <Modal isVisible={this.state.ismodalVisible} style={{backgroundColor:'white',width:"90%",height:175,borderRadius:8}} onBackButtonPress={this._toggleModal} swipeDirection="down" onSwipeComplete={this._toggleModal}>
   <View style={{flex:1}}>
   <Text style={{textAlign:"center",fontSize:25,fontWeight:'bold'}}>Sub Categories</Text>
  <FlatList data={this.state.data} renderItem={({item})=><Text style={{paddingBottom:10,borderBottomColor:'gray',borderBottomWidth:2,fontSize:20,marginLeft:10,marginRight:10,paddingTop:10}}>{item}</Text>} />
   </View>
    </Modal>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:10,height:80}}>
  <Icon
          reverse
          name='ios-book'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ios-car'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ios-bicycle'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ios-camera'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ios-american-football'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ios-musical-notes'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ios-laptop'
          type='ionicon'
          color='black'
          onPress={()=>
            {
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDCloseModal()
            }
          }
        />
  </ScrollView>
  <View style={{flex:1,marginTop:5,flexDirection:'row',flexWrap:'wrap'}}>
  <View style={{flexBasis:'50%'}}>
  <Card
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
  onPress={this._toggleDModal}
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>
<View style={{flexBasis:'50%'}}>
<Card 
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>
<View  style={{flexBasis:'50%'}}>
<Card 
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>
<View  style={{flexBasis:'50%'}}>
<Card
  title='HELLO WORLD'  image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>
</View>
  </ScrollView>
  {/* <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}>
        <Text style={{color:'white',padding:10,fontSize:20}} onPress={this._toggleCatModal}>+ListItems</Text>
          </TouchableOpacity> */}
          <View style={{alignItems:'center'}}>
          <View style={{position: 'absolute',
      width:140,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'purple',
      borderRadius:10,
      bottom:'20%',
      marginBottom:25
      }}>
            <Button title="+ListItems" onPress={this._toggleCatModal} buttonStyle={{backgroundColor:'purple',height:40}}/>
          </View>
          </View>
          <Modals showModal={this.state.isCatModal} />
          <CardDesp showDpModal={this.state.showDespModal} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width:140,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: '10%',
      backgroundColor:'purple',
      borderRadius:10
    },
   
    
  });
  