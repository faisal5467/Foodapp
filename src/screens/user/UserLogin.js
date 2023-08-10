import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';
import { translation } from '../../utils';
const UserLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] =useState(0);
  useEffect(()=>{
    getLang();
  },[])

  const getLang = async()=>{
    console.log()
   setSelectedLang(parseInt(await AsyncStorage.getItem('LANG'))); 
  }
  // useEffect(()=>{
  //   firestore()
  //   .collection('admin')
  //   .add({
  //     email: 'admin@gmail.com',
  //     password: 'admin@1234',
  //   })
  //   .then(() => {
  //     console.log('Admin added!');
  //   });
  // }, [])

  // useEffect(() => {
  //   adminLogin();
  // }, []);
  const adminLogin = async () => {
    setModalVisible(true);
    //   const admin = await firestore().collection('users').get();
    //   if (email === admin.docs[0]._data.email && password === admin.docs[0]._data.password){
    //     await AsyncStorage.setItem('EMAIL', email);
    //     navigation.navigate('Dashboard');
    //   }
    //   else{
    //     Alert.alert('wrong email/password')
    //   }
    //   console.log('admin is >>', admin.docs[0]._data);

    firestore()
      .collection('users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        setModalVisible(false);
        if (querySnapshot.docs[0]._data !== null) {
          if (
            querySnapshot.docs[0]._data.email === email &&
            querySnapshot.docs[0]._data.password === password
          ) {
            goToNextScreen(
              querySnapshot.docs[0]._data.userId,
              querySnapshot.docs[0]._data.mobile,
              querySnapshot.docs[0]._data.name,
            );
          }
        }
        /* ... */
      })
      .catch(error => {
        setModalVisible(false);
        console.log('userlogin error hai >', error);
        Alert.alert('Please check your Email/Password');
      });
  };

  // const goToNextScreen = async () => {
  //   await AsyncStorage.setItem('EMAIL', email);
  //   navigation.navigate('Home');
  // };


  const goToNextScreen = async (userId, mobile, name) => {
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', userId);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('NAME', name);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedLang==0 ? translation[1].English : selectedLang == 1 ? translation[1].Urdu : null}</Text>
      <TextInput
        style={styles.inputStyle}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Enter Email'}
        placeholderTextColor={'black'}
        color={'black'}
      />
      <TextInput
        style={styles.inputStyle}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Enter Password'}
        placeholderTextColor={'black'}
        color={'black'}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (email !== '' && password !== '') {
            adminLogin();
          } else {
            Alert.alert('please enter Email and Password ');
          }
        }}>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>

      <Text
        style={styles.createNewAccount}
        onPress={() => {
          navigation.navigate('UserSignup');
        }}>
        Create New Account
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 100,
    alignSelf: 'center',
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    width: '90%',
  },
  loginBtn: {
    backgroundColor: 'red',
    width: '90%',
    height: 60,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  createNewAccount: {
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginTop: 50,
    alignSelf: 'center',
    color:'black'
  },
});
