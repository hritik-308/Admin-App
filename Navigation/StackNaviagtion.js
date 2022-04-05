import { View, Text } from 'react-native'
import React from 'react'

import LoginScreen from '../Screens/LoginScreen'
import OTPScreen from '../Screens/OTPScreen'
import BottomNavigation from './BottomNavigation'
import Signup from '../Screens/Signup'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmptyScreenz from '../Screens/empty1'

const Stack = createNativeStackNavigator();                   

const StackNavigation = () => {
  return (
    <Stack.Navigator>
        
      <Stack.Screen name='BottomNavigation' component={BottomNavigation}
        options={{
          headerShown:false,
        }}
      />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{
          headerShown:false,
        }}
      />
         <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen name="EmptyScreenz" component={EmptyScreenz} />
    </Stack.Navigator>
  )
}

export default StackNavigation