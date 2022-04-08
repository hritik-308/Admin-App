
import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {AppRegistry} from 'react-native'
import StackNavigation from './Navigation/StackNaviagtion';
import database from '@react-native-firebase/database'
import { LogBox } from 'react-native';
import {requestUserPermission} from './Screens/Notification'
import { initialUpdaterRun } from 'react-native-reanimated/src/reanimated2/animation';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

database().setPersistenceEnabled(true);

AppRegistry.registerComponent('app', () => App);

const App = () => {
  return (
    <NavigationContainer>
     
      
    <StackNavigation/>
  
  </NavigationContainer>
  )
}

export default App;
