import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';
import Firebasedata from './Components/Firebasedata';
import PasswordGenerate from './Components/PasswordGenerate';
// import Yup from './Components/Yup';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AppNavigator from './src/AppNavigator';

const App = () => {


  const Stack = createNativeStackNavigator();

  const isDarkmode = useColorScheme() === 'dark';
  return (
    <AppNavigator/>
    // <NavigationContainer>
    //   <Stack.Screen name="Home" component={ContactList}/>
    // </NavigationContainer>
    // <SafeAreaView>
    //   {/* <Text style={isDarkmode? styles.whitetext : styles.blacktext}>App</Text> */}
    //   <ScrollView>
    //     {/* <FlatCards />
    //     <ElevatedCards />
    //     <FancyCard/>
    //     <FancyCard/>
    //     <ActionCard/>
    //     <ContactList/> */}

    //     {/* <Firebasedata/> */}
    //     {/* <Yup/> */}
    //     {/* <PasswordGenerate/> */}
    //     <AppNavigator/>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  whitetext: {
    color: 'white',
  },
  blacktext: {
    color: 'black',
  },
});
