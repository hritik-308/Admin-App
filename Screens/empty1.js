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
  // const DATA = [
  //   {
  //     id: 1,
  //     url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //     name: 'user1 ',
  //     video: './PocVideo.mp4',
  //   },
  //   {
  //     id: 2,
  //     url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //     name: 'user2 ',
  //     video: './PocVideo.mp4',
  //   },
  //   {
  //     id: 3,
  //     url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //     name: 'user3 ',
  //     video: './PocVideo.mp4',
  //   },
  // ];
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
        // console.log("ORIGINAL DATA ====>",datas)
        setEjson(datas);
      });
  };

  return (
    <FlatList
      data={ejson}
      renderItem={({item}) => {
        // console.log('ITEM DATA ====>', item);
        return (
          <View
            style={{
              flex: 1,
              marginBottom: 70,
              borderWidth: 3,
              borderRadius: 15,
            }}>
            <FlatList
              data={Object.values(item.vedios)}
              renderItem={({item}) => {
                // console.log('2nd ITEM DATA ====>', item);
                return (
                  // <Text style={{color: '#000'}}> {item.picture} </Text>
                  <WebView
                    style={{
                      width: '95%',
                      marginLeft: 10,
                      height: 200,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                    source={{
                      uri: item.vedio,
                    }}
                  />
                );
              }}
            />
            <View style={{flex: 1}}>
              <Text style={{color: '#000', fontSize: 20}}>
                {' '}
                Name: {item.name}{' '}
              </Text>
              <Text style={{color: '#000', fontSize: 20}}>
                {' '}
                Phone: {item.phone}{' '}
              </Text>
              <Text style={{color: '#000', fontSize: 20}}>
                {' '}
                Email: {item.email}{' '}
              </Text>
            </View>
          </View>
        );
      }}
    />

    // <FlatList
    //   data={itemArray}
    //   renderItem={({item}) => (
    //     <FlatList
    //       data={item}
    //       renderItem={
    //         ({item, index1}) => {
    //           return (
    //             // <Text>{item.vedio}</Text>
    //             <>
    //             <WebView
    //               style={{width: '95%',marginLeft:10, height: 200,marginBottom:10}}
    //               source={{
    //                 uri: item.vedio,
    //               }}
    //               />
    //             </>

    //           );
    //         }
    //         // console.log(item)
    //       }
    //     />
    //   )}
    // />
  );
};

{
  /* <WebView
        style={{ width: '100%', height: 200, }}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/vinove-demo-project.appspot.com/o/uploadVideos%2F1650517026208?alt=media&token=1abfd503-a49e-4c40-b33a-67b4ba693926',
          }}
        /> */
}
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
