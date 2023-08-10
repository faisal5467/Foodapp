import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Reg</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>gray</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding:8
  },

  card: {
    flex:1,
    width: 100,
    height: 100,
    borderRadius: 10,
    margin:8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'gray',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
