import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Main from './home_tabs/Main';
import Search from './home_tabs/Search';
import Wishlist from './home_tabs/Wishlist';
import Orders from './home_tabs/Orders';
import Profile from './home_tabs/Profile';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Orders />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomTabView}>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>{
            setSelectedTab(0);
        }}>
          <Image
            source={require('../../images/home.png')}
            style={[styles.bottomIcon,{tintColor:selectedTab==0 ?'red':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>{
            setSelectedTab(1);
        }}>
          <Image
            source={require('../../images/search.png')}
            style={[styles.bottomIcon,{tintColor:selectedTab==1 ?'red':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>{
            setSelectedTab(2);
        }}>
          <Image
            source={require('../../images/wishlist.png')}
            style={[styles.bottomIcon,{tintColor:selectedTab==2 ?'red':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>{
            setSelectedTab(3);
        }}>
          <Image
            source={require('../../images/add-to-cart.png')}
            style={[styles.bottomIcon,{tintColor:selectedTab==3 ?'red':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={()=>{
            setSelectedTab(4);
        }}>
          <Image
            source={require('../../images/profile.png')}
            // style={styles.bottomIcon}
            style={[styles.bottomIcon,{tintColor:selectedTab==4 ?'red':'black'}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabView: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcon: {
    height: 24,
    width: 24,
  },
});
