import React from 'react'
import HomeScreen from '../Screens/HomeScreen'
import CreateUserScreen from '../Screens/CreateUserScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditUserScreen from '../Screens/EditUsersScreen';
import App from '../Screens/empty1';
import LogOut from '../Screens/HomeScreen'
import readUserData from '../Screens/HomeScreen'

const Stack = createNativeStackNavigator();
const NewUserStackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="readUserData" component={readUserData} />
         <Stack.Screen name="App" component={App} />
         <Stack.Screen name="LogOut" component={LogOut} />
        {/* <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
        <Stack.Screen name="EditUserScreen" component={EditUserScreen} /> */}
        {/* <Stack.Screen name='BottomNavigation' component={BottomNavigation}
          options={{
            headerShown:false,
          }}
        /> */}

    </Stack.Navigator>
  )
}
export default NewUserStackNavigation
