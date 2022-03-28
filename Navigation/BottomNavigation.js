import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateUserScreen from '../Screens/CreateUserScreen'
import NewUserStackNavigation from './NewUserStackNavigation'

const Tab = createBottomTabNavigator();
// const CustomTabBarButton=({children, onPress})=>(
//   <TouchableOpacity
//   style={{
//     top:-30,
//     justifyContent:'center',
//     alignItems:'center',
//     ...styles.shadow
//   }}
//   onPress={onPress}
//   >
//     <View 
//     style={{
//       flex:1,
//       width:51,
//       height:70,
//       borderRadius:50,
//       backgroundColor:'#226557',
//     }}>
//       {children}
//     </View>
//   </TouchableOpacity>
// )

const BottomNavigation = () => {
  return (

    <Tab.Navigator
    screenOptions={({route}) => ({
  
      tabBarIcon: ({focused, color, size}) => {
        
        let iconName;

        if (route.name === 'HomeScreens') {
          iconName = focused
            ? require('/home/hritikshukla/POC/Images/home.png')
            : require('/home/hritikshukla/POC/Images/house-black-silhouette-without-door.png');
        }else if (route.name === 'EmptyScreen') {
          iconName = focused
            ? require('/home/hritikshukla/POC/Images/plus.png')
            : require('/home/hritikshukla/POC/Images/plus.png');
        }else if (route.name === 'CreateUser') {
          iconName = focused
            ? require('/home/hritikshukla/POC/Images/user.png')
            : require('/home/hritikshukla/POC/Images/profile-user.png');
        }
    
            // You can return any component that you like here!
            
              return (
                
                <Image
                  source={iconName}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                />
              );
          },
          tabBarActiveBackgroundColor:'#226557',//background color 3748f7
          tabBarInactiveBackgroundColor:'silver',
          tabBarActiveTintColor:'black',
          tabBarShowLabel:true,
          tabBarStyle:{
            position:'absolute',
            overflow:'hidden',
            bottom:2,
            borderRadius:50,
            marginHorizontal:16,
            // borderWidth:1
          }
          })
        
      }
      >
      {/* <Tab.Screen name="EmptyScreen" component={EmptyScreen} 
      options={{
        tabBarIcon:({focused})=>(
          
          <Image
          
          source={require('../Images/plus.png')}
          resizeMode="contain"
          style={{
            width:20,
            height:20,
            tintColor:'#fff',
            
            
            
          }}
          />
        ),
        tabBarButton: (props)=>(
          <CustomTabBarButton {...props}/>
        )
      }} /> */}
      <Tab.Screen name="HomeScreens" component={NewUserStackNavigation} options={{
            headerShown:false,
          }} />
      
      <Tab.Screen name="CreateUser" component={CreateUserScreen} />     
    </Tab.Navigator>
  )
}
const styles= StyleSheet.create({
  shadow:{
     shadowColor:'#7F5DF0',
     shadowOffset:{
       width:10,
       height:10,
     },
     shadowOpacity:25,
     shadowRadius:10,
     elevation:10
  }
})
export default BottomNavigation