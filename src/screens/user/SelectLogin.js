import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LanguageModal from '../common/LanguageModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translation} from '../../utils';

const SelectLogin = () => {
  const navigation = useNavigation();
  const [langmodalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);

  const saveSelectedLang = async index => {
    await AsyncStorage.setItem('LANG', index + '' );
  };

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>
      {selectedLang==0 ? translation[0].English : selectedLang == 1 ? translation[0].Urdu : null}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.btnText}>Admin Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('UserLogin');
        }}>
        <Text style={styles.btnText}>User Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.selectLanguage}
        onPress={() => {
          setLangModalVisible(!langmodalVisible);
        }}>
        <Text style={styles.langText}>Select Language</Text>
      </TouchableOpacity>
      <LanguageModal
        langmodalVisible={langmodalVisible}
        setLangModalVisible={setLangModalVisible}
        onSelectLang={x => {
          setSelectedLang(x);
          saveSelectedLang(x);
        }}
      />
    </View>
  );
};

export default SelectLogin;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  btn: {
    backgroundColor: 'purple',
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  selectLanguage: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20,
    bottom: 20,
  },
  langText: {
    fontSize: 18,
    color: 'purple',
  },
});
