import React, { Component,useEffect} from 'react';
import { StyleSheet, View, Alert, Text, Image } from 'react-native';
import ActionButton from 'react-native-action-button';

import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import readUserData from './HomeScreen'
import App from './empty1';
import LogOut from './HomeScreen'
import { add } from 'react-native-reanimated';
export default function ActionButtons(navigation) {
   

   
    return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

        <ActionButton buttonColor="rgba(231,76,60,1)" bgColor="black">
          <ActionButton.Item buttonColor='#9b59b6'   >
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/2x/add.png', }} style={styles.itemButton} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => navigation.navigate(App)}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/2x/appointment-reminders.png', }} style={styles.itemButton} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#fff' title="Tasks" onPress={() => navigation.navigate(LogOut)}>
            <Image source={{ uri: 'https://img.icons8.com/material-outlined/2x/details-popup.png', }} style={styles.itemButton} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  
}

const styles = StyleSheet.create({
  itemButton: {
    left:0, right:0,
    top:0,
    bottom:0,
    position:'absolute',
    alignSelf:'stretch',
   
  },
});

    
