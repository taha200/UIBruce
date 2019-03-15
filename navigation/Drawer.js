import React from 'react'
import {Platform,Dimensions} from 'react-native'
import {createDrawerNavigator,createAppContainer,createStackNavigator} from 'react-navigation'
import HomeScreen from '../screens/homescreen'
import OthersScreen from '../screens/other'
import SettingsScreen from '../screens/setting'
import MenuDrawer from '../components/MenuDrawerComp'
import Conversation from '../screens/conversations'
import Filter from '../screens/filter'
import Profila from '../screens/profila'
import Signup from '../screens/signup'
import LoginScreen from '../screens/login'
const Width = Dimensions.get('window').width
const Stack = createStackNavigator({
    Profila:Profila,
    Filter:Filter,
    HomeScreen:HomeScreen,
    Signup:Signup,
    LoginScreen:LoginScreen
    
},{
    initialRouteName:'LoginScreen',
    headerMode:'none'
})
const drawerConfig={
    drawerWidth:Width*0.83,
    contentComponent:({navigation})=>{
        return <MenuDrawer navigation={navigation} /> 
    }
}

const DrawerNavigatior= createDrawerNavigator({
    HomeScreen:{
        screen:HomeScreen
    },
    Others:{
        screen:OthersScreen
    },
    Conversation:{
        screen:Conversation
    },
    Stack:Stack,
},{
    initialRouteName:'Stack'
},drawerConfig
)

export default createAppContainer(DrawerNavigatior)

