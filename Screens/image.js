import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import database, {firebase} from '@react-native-firebase/database';
import {ActivityIndicator} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import {array, object} from 'yup';
import {cos} from 'react-native-reanimated';

const Videoss = () => {

  useEffect(() => {
    readUserData();

    return () => {};
  }, []);

  const [itemArray, setitemArray] = useState([]);
  const [ejson, setEjson] = useState([]);
  //ReadUser data from rnFirebase realtime DB
  const readUserData = async () => {
    let array = [];
    database()
      .ref('/Users/')
      .on('value', snapshot => {
        const datas = Object.values(snapshot.val());
        // console.log(datas)
        setEjson(datas);
        // console.log('`use state data====>`',itemArray)
      });
  };

  return (
    <FlatList
      data={ejson}
      renderItem={({item}) => {
        return (
          <View style={{flex:1,marginBottom:70,borderWidth:3,borderRadius:15}}>
           
            <FlatList
              data={Object.values(item.pictures)}
              renderItem={({item}) => {
                return (
                  // <Text style={{color: '#000'}}> {item.picture} </Text>
                  <Image
                    source={{uri: item.picture}}
                    style={{
                      height: 200,
                      width: '95%',
                      borderWidth: 1,
                      borderColor: '#000',
                      margin: 10,
                      borderWidth:3,
                      borderRadius:30
                    }}
                  />
                  
                );
              }}
            />
             <View style={{flex: 1}}>
              <Text style={{color: '#000', fontSize: 20}}> Name: {item.name} </Text>
              <Text style={{color: '#000', fontSize: 20}}> Phone: {item.phone} </Text>
              <Text style={{color: '#000', fontSize: 20}}> Email: {item.email} </Text>
            </View>

          </View>
        );
      }}
    />

    
  );
};


const styles = StyleSheet.create({
  backgroundVideo: {
    height: 250,
    width: '100%',
    backgroundColor: 'yellow',
    borderBottomWidth: 5,
  },
  videoCard: {
    // backgroundColor: 'red',
    borderWidth: 4,
    marginBottom: 5,
    borderColor: 'black',
    margin: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  mediaControls: {
    height: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  videoDes: {
    padding: 5,
  },
  videoDesText: {
    color: 'black',
  },
});

export default Videoss;
