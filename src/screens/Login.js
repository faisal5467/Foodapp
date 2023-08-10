import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    const admin = await firestore().collection('admin').get();
    if (email === admin.docs[0]._data.email && password === admin.docs[0]._data.password){
      await AsyncStorage.setItem('EMAIL', email);
      navigation.navigate('Dashboard');
    }
    else{
      Alert.alert('wrong email/password')
    }
    console.log('admin is >>', admin.docs[0]._data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
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
          if(email!=='' && password!==''){
            adminLogin();
          }
          else{
            Alert.alert('please enter Email and Password ');
          }
        }}>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
});
