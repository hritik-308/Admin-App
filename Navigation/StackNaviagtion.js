import React, {useState, useEffect} from 'react';
import LoginScreen from '../Screens/LoginScreen';
import BottomNavigation from './BottomNavigation';
import Signup from '../Screens/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmptyScreenz from '../Screens/empty1';
import EditUserScreen from '../Screens/EditUsersScreen';
import SplashScreen from '../Screens/SplashScreen';
import EmptyScreens from '../Screens/AddUser';
import Videoss from '../Screens/empty1';
import image from '../Screens/image';
import Images from '../Screens/image';
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1500);
  }, []);

  return (
    <Stack.Navigator>
      {showSplashScreen ? (
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
          />
          ) : null}
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen name="CreateUserScreen" component={EmptyScreens} />
      <Stack.Screen name="EditUserScreen" component={EditUserScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EmptyScreenz" component={EmptyScreenz} />
      <Stack.Screen name="Videoss" component={Videoss} />
      <Stack.Screen name="Images" component={Images} />

    </Stack.Navigator>
  );
}
