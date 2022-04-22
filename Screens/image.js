import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import database, {firebase} from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const Images = () => {
  useEffect(() => {
    readUserData();

    return () => {};
  }, []);
  const [itemArray, setitemArray] = useState([]);
  // const [vide, setVide] = useState([])
  const readUserData = async () => {
    let array = [];
    database()
      .ref('/Users/')
      .on('value', snapshot => {
        const datas = Object.values(snapshot.val());
        datas.map((item, index) => {
          const ImgData = Object.values(item.pictures);
          // console.warn("IMG Data--->",ImgData);
          array.push(ImgData);
        });
        setitemArray(array);
      });
  };
  // console.log("DATA",JSON.stringify(itemArray,undefined,2))
  return (
    <>
      <FlatList
        data={itemArray}
        // keyExtractor={({item, index})=> index.toString()}
        renderItem={({item}) => (
          <FlatList
            data={item}
            // keyExtractor={({item, index1})=> index1.toString()}
            renderItem={
              ({item, index1}) => {
                return (
                  // <Text>{item.picture}</Text>
                  <Image
                    source={{uri: item.picture}}
                    style={{
                      height: 200,
                      width: "95%",
                      borderWidth: 1,
                      borderColor: '#000',
                      margin:10
                      
                    }}
                  />
                );
              }
              // console.log(item)
            }
          />
        )}
      />
    </>
  );
};

export default Images;

const styles = StyleSheet.create({});
