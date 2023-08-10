import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('../Assets/goram.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Goram Landawa</Text>
            <Text style={styles.cardLabel}>Faisalabad</Text>
            <Text style={styles.cardDescription}>some thing describe here</Text>
            <Text style={styles.cardFooter}>New Song</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: { 
    width:'92%',
    height:360,
    borderRadius: 6,
    marginHorizontal:16,
    marginVertical:12,
    
  },
  cardElevated: {
    backgroundColor:'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
        height:1, width:1,
    },
  },
  cardImage: {
    height: 200,
    width: '100%',
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
  },
  cardBody:{
flex:1,
flexGrow:1,
paddingHorizontal:12,
  }, 
  cardTitle: {
    color:'black',
    fontSize:24,
    fontWeight:'bold',
    marginBottom:3
  },
  cardLabel: {
    color:'black',
    fontSize:18,
    marginBottom:5
  },
  cardDescription: {
    color:'black',
    fontSize:14,
    marginBottom:10
  },
  cardFooter: {
    color:'black',
  },
});
