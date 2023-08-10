import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {managePanProps} from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(()=>{
      setTimeout(()=>{
          navigation.navigate('SelectLogin');
          // checkLogin();
      },3000)
  }, [])

  const checkLogin = async () =>{
    const email =  await AsyncStorage.getItem('EMAIL');
    if(email!==null){
      navigation.navigate('Home')
    }
    else {
      navigation.navigate('SelectLogin');
    }
  }
  return (
    <View style={styles.container}>
         <LinearGradient colors={['#5D6D7E', '#283747']} style={styles.gradient}>
         <Text style={styles.logo}>E-Commerce App</Text>
         {/* <Text style={styles.text}>Your App Name</Text> */}
       </LinearGradient>
      
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
