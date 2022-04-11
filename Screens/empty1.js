import React, {useState, useRef,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
// import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import Video from 'react-native-video';
import database, {firebase} from '@react-native-firebase/database';

const Videoss = () => {
  const DATA = [
    {
      id: 1,
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      name: 'user1 ',
      video: './PocVideo.mp4',
    },
    {
      id: 2,
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      name: 'user2 ',
      video: './PocVideo.mp4',
    },
    {
      id: 3,
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      name: 'user3 ',
      video: './PocVideo.mp4',
    },
  
  ];
  useEffect(() => {
    readUserData()
  
    return () => {
      
    }
  }, [])
  
  const [itemArray, setitemArray] = useState([])

  //ReadUser data from rnFirebase realtime DB
  const readUserData = async () => {
    database().ref('/Users/')
    .on('value', snapshot => {
      setitemArray(Object.values(snapshot.val()))
    
    //  console.log(Object.values(snapshot.val()))
   });
   };

  // The video we will play on the player.
  // const video = require('./PocVideo.mp4');

  return (
    <>
      <FlatList
        data={itemArray}
        renderItem={({item}) => {
          if (item.video){
            return (
              <>
                <SafeAreaView>
                  <View style={styles.videoCard}>
                    <View>
                      <Video
                        paused={false}
                        source={{uri: item.video}}
                        style={styles.backgroundVideo}
                      />
                    </View>
                    <View style={styles.videoDes}>
                      <Text style={styles.videoDesText}>
                        User Name: {item.name}
                      </Text>
                      <Text style={styles.videoDesText}>User email : {item.email}</Text>
                      <Text style={styles.videoDesText}>User Phone :{item.phone}</Text>
                    </View>
                  </View>
                </SafeAreaView>
              </>
            );

          }
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 250,
    width: '100%',
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
