import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateUserScreen from '../Screens/CreateUserScreen';
import NewUserStackNavigation from './NewUserStackNavigation';
import EmptyScreen from '../Screens/AddUser';
import Videoss from '../Screens/empty1';
import Images from '../Screens/image';

const Tab = createBottomTabNavigator();

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
          } else if (route.name === 'videoss') {
            iconName = focused
              ? require('/home/hritikshukla/POC/Images/film.png')
              : require('/home/hritikshukla/POC/Images/filmy.png');
          } else if (route.name === 'Images') {
            iconName = focused
              ? require('/home/hritikshukla/POC/Images/picture.png')
              : require('/home/hritikshukla/POC/Images/photo.png');
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
        tabBarActiveBackgroundColor: 'dodgerblue', //background color 3748f7
        tabBarInactiveBackgroundColor: 'silver',
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          overflow: 'hidden',
          bottom: 10,
          borderRadius: 50,
          marginHorizontal: 16,
          // borderWidth:1
        },
      })}>
      <Tab.Screen
        name="HomeScreens"
        component={NewUserStackNavigation}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen name="videoss" component={Videoss} />
      <Tab.Screen
       name="Images"
       component={Images}
       options={{
         headerShown: false,
       }}
     />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 25,
    shadowRadius: 10,
    elevation: 10,
  },
});
export default BottomNavigation;
