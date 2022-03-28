
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './Navigation/StackNaviagtion';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);



const App = () => {
  return (
    <NavigationContainer>
     
      
    <StackNavigation/>
  
  </NavigationContainer>
  )
}

export default App;
