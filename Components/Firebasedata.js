import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';


const Firebasedata = () => {

      const [data, setData] = useState(null)
    useEffect(()=>{
      GetFirestoredata()
        // firestore().collection('users').onSnapshot(snapshot => {
        //     console.log(snapshot.docs)
        // })
    }, [])

    const GetFirestoredata = async() =>{
        
        const data = await firestore().collection('users').doc('SX7iFDJVIHESXtxMZHtY').get()
        console.log(data._data)
        setData(data._data)
        // const data = await firestore().collection('users').get()
        // console.log(data)
    }
  return (
    <View>
      {/* <Text>Firebasedata</Text> */}
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}

export default Firebasedata

const styles = StyleSheet.create({})