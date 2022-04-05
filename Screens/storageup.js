import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export default function SignupScreen({navigation}) {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [image,setImage] = useState(null)
    const [showNext,setShowNext] = useState(false)
    const [loading,setLoading] = useState(false)
    const [downloadurl, setDownloadurl] = useState()
    if(loading){
        return  <ActivityIndicator size="large" color="#00ff0                                                                   0" />
    }
    const userSignup = async ()=>{
        setLoading(true)
        if(!email || !password || !image|| !name){
               alert("please add all the field")
               return 
        }
        try{
          const result =  await auth().createUserWithEmailAndPassword(email,password)
            firestore().collection('users').doc(result.user.uid).set({

                uid:result.user.uid,
                pic:image,
                status:"online"
            })  
            setLoading(false)
        }catch(err){
            alert("something went wrong")
        }
       

    }
    const pickImageAndUpload = ()=>{
        launchImageLibrary({quality:0.5},(fileobj)=>{
        //    console.log(fileobj.assets[0].uri)
         const uploadTask =  storage().ref().child(`/profilePictures/${Date.now()}`).putFile(fileobj.assets[0].uri)
                uploadTask.on('state_changed', 
                 (snapshot) => {
  
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if(progress==100) alert('image uploaded')
                    
                }, 
                (error) => {
                    alert("error uploading image",error)
                }, 
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        setDownloadurl(downloadURL)
                    });
                }
                );
        })
    }
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box2}>
               
                <Button
                color='dodgerblue'
                mode="contained"
                onPress={()=>pickImageAndUpload()}
                >select profile pic</Button>
                
                

              <Image
              style={{height:40,width:40,borderWidth:2}}
              source={{uri:downloadurl}}/>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:22,
        color:"dodgerblue",
       
    },
  
    box2:{
        paddingHorizontal:40,
        justifyContent:"space-evenly",
        color:'dodgerblue'
    }
 });











