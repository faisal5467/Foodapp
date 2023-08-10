import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Items = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [isFocused]);

  const getItems = () => {
    firestore()
      .collection('items')
      .get()
      .then(querySnapshot => {
        console.log('Total items: ', querySnapshot.size);
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          tempData.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setItems(tempData);
      });
  };

  const deleteItem = docId =>{
    firestore()
  .collection('items')
  .doc(docId)
  .delete()
  .then(() => {
    console.log('User deleted!');
    getItems();
  });
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item, index}) => {
      
          return (
            <View style={styles.itemView}>
              <Image
                source={{uri: item.data.imageURL}}
                style={styles.itemImage}
              />

              <View style={styles.nameView}>
                <Text style={styles.nameText}>{item.data.name}</Text>
                <Text style={styles.descText}>{item.data.description}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.priceText}>
                    {'$' + item.data.discountPrice}
                  </Text>
                  <Text style={styles.discText}>{'$' + item.data.price}</Text>
                </View>
              </View>

              <View style={{margin:15}}>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate('EditItem', {
                    data : item.data,
                    id : item.id,
                  })
                }}>
                  <Image
                    source={require('../images/edit.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                  deleteItem(item.id);
                }}>
                  <Image
                    source={require('../images/delete.png')}
                    style={[styles.icon, {marginTop:20}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    width: '50%',
    margin: 10,
  },
  priceView: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color:'black'
  },
  descText: {
    fontSize: 14,
    fontWeight: '600',
    color:'black',
  },
  priceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
  },
  discText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  
  },
  icon: {
    width: 24,
    height: 24,
  },
});
