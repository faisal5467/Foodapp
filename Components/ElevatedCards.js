import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevatedOne]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevatedTwo]}>
            <Text>Tab2</Text>
        </View>
        <View style={[styles.card, styles.cardElevatedThree]}>
            <Text>Tab3</Text>
        </View>
        <View style={[styles.card, styles.cardElevatedFour]}>
            <Text>Tab4</Text>
        </View>
        <View style={[styles.card, styles.cardElevatedFive]}>
            <Text>Tab5</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      container: {
        flex: 1,
        flexDirection: 'row',
        padding:8
      },
      card: {
        flex:1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin:8,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      cardElevatedOne:{
        backgroundColor:'gray',
        elevation:4,
        shadowOffset :{
            height:1,
            width:1
        },
        shadowColor:'red',
                shadowOpacity:0.5,
                shadowRadius:2,
      },
      cardElevatedTwo:{
        backgroundColor:'red',
      },
      cardElevatedThree:{
        backgroundColor:'green',
      },
      cardElevatedFour:{
        backgroundColor:'yellow',
      },
      cardElevatedFive:{
        backgroundColor:'pink',
      }
})