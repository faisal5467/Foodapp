import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const Contacts = [
    // {
    //     "uid": '1',
    //     "image": require("../Assets/goram.png"),
    //     "name": "Dr. Faisal Siddique ",

    // },
    // {
    //     "uid": '2',
    //     "image": require("../Assets/mabala.png"),
    //     "name": "Dr. Ali ",
      

    // },
    {
      uid: '1',
      name: 'John Doe',
      number: '555-555-5555',
      imageURL:
        'https://www.google.com/search?q=image&rlz=1C1VDKB_enPK1054PK1054&oq=image&aqs=chrome.0.69i59j69i61l2j69i60.2463j0j7&sourceid=chrome&ie=UTF-8#imgrc=YmDohMp4T5AODM',
    },
    {
      uid: '2',
      name: 'Faisal',
      number: '555-555-5555',
      imageURL:
      'https://www.google.com/search?q=image&rlz=1C1VDKB_enPK1054PK1054&oq=image&aqs=chrome.0.69i59j69i61l2j69i60.2463j0j7&sourceid=chrome&ie=UTF-8#imgrc=pZG009_n8yw8iM',
      
    },
    {
      uid: '3',
      name: 'Ali',
      number: '555-555-5555',
      imageURL:
      'https://www.google.com/search?q=image&rlz=1C1VDKB_enPK1054PK1054&oq=image&aqs=chrome.0.69i59j69i61l2j69i60.2463j0j7&sourceid=chrome&ie=UTF-8#imgrc=2DNOEjVi-CBaYM',
      
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {Contacts.map((item, index) => (
           
           
          <View key={index} style={styles.userCard}>
             <Image source={{ uri: item.imageURL}}
                          style={styles.imageContainer}></Image>
            <Text style={styles.headingText}>{item.name}</Text>
            <Text style={styles.headingText}>{item.number}</Text>
          </View>
))}
        {/* {Contacts.map(({item}) => (
          <View key={uid} style={styles.userCard}>
            <Image
                          source={{uri: item.imageURL}}
                          style={styles.imageContainer}></Image>
            <Text style={styles.username}>{item.name}</Text>
            <Text style={styles.usernumer}>{item.number}</Text>
          </View>
        ))} */}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard:{},
  imageContainer:{
    flex: 1,
    height:60,
    width:60,
    borderRadius:50
  },
  username:{},
  usernumer:{},
});
