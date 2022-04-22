import React, {useState} from 'react';
import {
  Button,
  TextInput,
  View,
  Alert,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  phone,
  Image,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import COLORS from '../Constant/color';
import STYLES from '../Constant/color';
import PhoneInput from 'react-native-phone-number-input';
import OtpInputs from 'react-native-otp-inputs';
import Signup from './Signup';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(
      '+91' + phoneNumber,
    );
    setConfirm(confirmation);
  }
  async function confirmCode() {
    try {
      await confirm.confirm(code);
      navigation.navigate('BottomNavigation');
    } catch (error) {
      Alert.alert('Invalid code.', error.message);
    }
  }
  if (!confirm) {
    // const onChangeNumber = ()=>{
    //   setPhoneNumber()
    // }
    return (
      <>
        <SafeAreaView
          style={{paddingHorizontal: 20, backgroundColor: COLORS.white}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
                VIN
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: COLORS.secondary,
                }}>
                OVE
              </Text>
            </View>
            <Image
              source={require('../Images/otpp.png')}
              style={{
                height: 50,
                width: 40,
                padding: 65,
                marginTop: 25,
                marginLeft: 100,
              }}
            />
            <View style={{flexDirection: 'row', marginTop: 80}}>
              <Text
                style={{
                  fontSize: 31,
                  padding: 4,
                  fontWeight: 'bold',
                  color: COLORS.dark,
                }}>
                Enter
              </Text>
              <Text
                style={{
                  fontSize: 31,
                  padding: 4,
                  fontWeight: 'bold',
                  color: COLORS.secondary,
                }}>
                Your
              </Text>
              <Text
                style={{
                  fontSize: 31,
                  padding: 4,
                  fontWeight: 'bold',
                  color: COLORS.dark,
                }}>
                Phone,
              </Text>
            </View>

            <Text
              style={{fontSize: 14, fontWeight: 'bold', color: COLORS.light}}>
              You Will Receive a 6 digit code for phone number verification
            </Text>
          </ScrollView>
        </SafeAreaView>
        <View
          style={{
            padding: 90,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white,
          }}>
          <PhoneInput
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            withShadow
            autoFocus
          />

          <TouchableHighlight
            style={{
              marginRight: 40,
              marginLeft: 50,
              marginTop: 12,
              paddingTop: 15,
              paddingBottom: 12,
              textAlign: 'center',
              backgroundColor: COLORS.secondary,
              borderRadius: 19,
              borderWidth: 2,
              borderColor: 'black',
            }}
            onPress={() => signInWithPhoneNumber(phoneNumber)}
            underlayColor="#226557">
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                marginRight: 10,
                marginLeft: 16,
              }}>
              Continue{' '}
            </Text>
          </TouchableHighlight>
          <Text style={{color: COLORS.light, fontWeight: 'bold', padding: 13}}>
            Don`t have an Valid Number ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            margin: 4,
            fontWeight: 'bold',
            fontSize: 37,
            color: COLORS.secondary,
          }}>
          Verify
        </Text>
        <Text
          style={{
            margin: 4,
            fontWeight: 'bold',
            fontSize: 37,
            color: COLORS.dark,
          }}>
          Phone
        </Text>
      </View>
      <Image
        source={require('../Images/otps.png')}
        style={{
          height: 50,
          width: 40,
          padding: 65,
          marginTop: 25,
          marginLeft: 48,
        }}
      />
      <Text style={{margin: 60, fontSize: 16, color: COLORS.light}}>
        Code is Send To Given Number
      </Text>
      <TextInput
        keyboardType="phone-pad"
        style={{
          color: 'black',
          borderWidth: 1,
          width: 150,
          marginBottom: 20,
          borderRadius: 19,
        }}
        value={code}
        onChangeText={text => setCode(text)}
      />
      {/* <OtpInputs
          handleChange={(code) => setCode(code)}
          numberOfInputs={6}
        /> */}
      <Button title="Enter OTP" onPress={() => confirmCode()} color="#64beff" />
    </View>
  );
}
