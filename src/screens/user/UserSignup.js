import {
    Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Loader from '../common/Loader';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';



const UserSignup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const saveUser = () => {
    setModalVisible(true);
    const userId = uuid.v4();
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        userId: userId,
        cart: [],
      })
      .then(res => {
        setModalVisible(false);
        navigation.goBack();
      })
      .catch(error => {
        setModalVisible(false);
        console.log('ye users ka error hai >>', error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.inputStyle}
        value={name}
        onChangeText={text => setName(text)}
        placeholder={'Enter Name'}
        placeholderTextColor={'black'}
        color={'black'}
      />
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
      <TextInput
        style={styles.inputStyle}
        value={mobile}
        onChangeText={text => setMobile(text)}
        placeholder={'Enter Mobile'}
        keyboardType='number-pad'
        placeholderTextColor={'black'}
        color={'black'}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (
            name !== '' &&
            email !== '' &&
            password !== '' &&
            mobile !== '' &&
            mobile.length == 11
          ) {
            saveUser();
          } else {
            Alert.alert('please enter Email and Password ');
          }
          // setModalVisible(!modalVisible);
        }}>
        <Text style={styles.btn}>Sign Up</Text>
      </TouchableOpacity>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default UserSignup;

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
