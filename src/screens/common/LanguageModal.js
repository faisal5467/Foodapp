import {
  StyleSheet,
  Text,
  View,
  Modal,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');

const LanguageModal = ({langmodalVisible, setLangModalVisible, onSelectLang }) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [languages, setLanguages] = useState([
    {name: 'English', selected: true},
    {name: 'اردو', selected: false},
    {name: 'سرائیکی', selected: false},
    {name: 'بلوچی', selected: false},
    {name: 'پنجابی', selected: false},
  ]);

  const onSelect = index => {
    const temp = languages;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectedLang(index);
        }
      } else {
        item.selected = false;
      }
    });

    // setLanguages(temp);
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setLanguages(temp2);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={langmodalVisible}
      onRequestClose={() => {
        setLangModalVisible(!langmodalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.titleStyle}>Select Language</Text>
          <View style={{width: '100%'}}>
            <FlatList
              data={languages}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.languageItem,
                      {borderColor: item.selected == true ? 'blue' : 'black'},
                    ]}
                    onPress={() => {
                      onSelect(index);
                    }}>
                    {item.selected == true ? (
                      <Image
                        source={require('../../images/radio-selected.png')}
                        style={[styles.icon, {tintColor: 'blue'}]}
                      />
                    ) : (
                      <Image
                        source={require('../../images/radio-button.png')}
                        style={styles.icon}
                      />
                    )}

                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 18,
                        color: item.selected == true ? 'blue' : 'black',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.cancelbtn}
              onPress={() => {
                setLangModalVisible(false);
              }}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.applybtn}
              onPress={() => {
                setLangModalVisible(false);
                onSelectLang(selectedLang);
              }}>
              <Text style={{color: 'white'}}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    height: height / 1.7,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  languageItem: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  icon: {
    height: 24,
    width: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cancelbtn: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applybtn: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
});
