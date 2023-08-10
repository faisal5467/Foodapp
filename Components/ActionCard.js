// import {StyleSheet, Text, View, Linking} from 'react-native';
// import React from 'react';

// const ActionCard = () => {
//   const openWebsite = websiteLink => {
//     Linking.openURL(websiteLink);
//   };
//   return (
//     <View>
//       <Text style={styles.headingText}>ActionCard</Text>
//       <View style={[styles.card, styles.elevatedcard]}>
//         <View style={styles.headingContainer}>
//           <Text style={styles.headerText}>
//             Hello Developer, what's going on
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ActionCard;

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingHorizontal: 8,
//   },
//   elevatedcard: {},
//   headingContainer: {},
//   headerText: {},
// });
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Block Card</Text>
      <View style={[styles.card, styles.elevatedcard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Hello Developer, what's going on
          </Text>
        </View>
        <Image
          source={require('../Assets/musicbg.jpg')}
          style={styles.imagedesign}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4} style={styles.bodyContainer}>
            You can handle these events with returns a Promise that resolves to
            the URL, if there is one.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
            <Text style={styles.SocialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
            <Text style={styles.SocialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 5,
    height: 300,
  },
  elevatedcard: {
    backgroundColor: '#3AE35E',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: '#333',
    elevation: 0.4,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagedesign: {
    height: 150,
    width: '100%',
  },
  bodyContainer: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  SocialLinks: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
