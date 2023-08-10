import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Login from './screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from './screens/Splash';
import Dashboard from './screens/Dashboard';
import EditItem from './screens/EditItem';
import SelectLogin from './screens/user/SelectLogin';
import UserLogin from './screens/user/UserLogin';
import UserSignup from './screens/user/UserSignup';
import Home from './screens/user/Home';
import Cart from './screens/user/Cart';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EditItem" component={EditItem} />
      <Stack.Screen name="SelectLogin" component={SelectLogin} />
      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="UserSignup" component={UserSignup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} screenOptions={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //     <Splash/>
    //   {/* <Text>AppNavigator</Text> */}
    // </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
