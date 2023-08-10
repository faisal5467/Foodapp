import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const Add = () => {
  const [imageData, setImageData] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openGallery();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.didCancel) {
    } else {
      console.log('the result is >>:', result);
      setImageData(result);
    }
  };


//////////////////////
const uploadImage = async () => {
  const reference = storage().ref(imageData.assets[0].fileName);
  const pathToFile = imageData.assets[0].uri;
  // uploads file
  await reference.putFile(pathToFile);
  const url = await reference.getDownloadURL(); // Use 'reference' directly here
  console.log('url of the image is >>', url);
  uploadItems(url);
};
///////////////////

  // const uploadImage = async () => {
  //   const reference = storage().ref(imageData.assets[0].fileName);
  //   const pathToFile = imageData.assets[0].uri;
  //   // uploads file
  //   await reference.putFile(pathToFile);
  //   const url = await storage().ref(reference).getDownloadURL();
  //   console.log('url of the image is >>', url);
  //   uploadItems(url);
  // };

  const uploadItems = async (url) => {
    firestore()
      .collection('items')
      .add({
        name: name,
        price: price,
        discountPrice: discountPrice,
        description: description,
        imageURL: url + '',
      })
      .then(() => {
        console.log('User added!');
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Items</Text>
        </View>
        {imageData !== null ? (
          <Image
            source={{uri: imageData.assets[0].uri}}
            style={styles.imageStyle}
          />
        ) : null}
        <TextInput
          placeholder="Enter Item Name"
          style={styles.InputStyle}
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor={'black'}
          color={'black'}
        />
        <TextInput
          placeholder="Enter Item Price"
          style={styles.InputStyle}
          value={price}
          onChangeText={text => setPrice(text)}
          placeholderTextColor={'black'}
          color={'black'}
        />
        <TextInput
          placeholder="Enter Item Discount Price"
          style={styles.InputStyle}
          value={discountPrice}
          onChangeText={text => setDiscountPrice(text)}
          placeholderTextColor={'black'}
          color={'black'}
        />
        <TextInput
          placeholder="Enter Item Description"
          style={styles.InputStyle}
          value={description}
          onChangeText={text => setDescription(text)}
          placeholderTextColor={'black'}
          color={'black'}
        />
        <TextInput
          placeholder="Enter Image URL"
          style={styles.InputStyle}
          value={imageURL}
          onChangeText={text => setImageURL(text)}
          placeholderTextColor={'black'}
          color={'black'}
        />
        <Text style={{alignSelf: 'center', marginTop: 40}}>OR</Text>
        <TouchableOpacity
          style={styles.picBtn}
          onPress={() => {
            requestCameraPermission();
          }}>
          <Text style={{color:'black'}}>Pick Image From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadBtn}
          onPress={() => {
            uploadImage();
          }}>
          <Text style={{color: '#fff'}}>Upload Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  InputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  picBtn: {
    width: '90%',
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: '#5246f2',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  imageStyle: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
});
