import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';

/* Importing the component that cosumes the
jsonplaceholder values */
import QueryList from '../utils/QueryList';

/* Importing the searchbar component */
import LookContacts from '../utils/LookContacts';

/* Home landscape Component */
const ContactListPort = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/colors-abstraction.jpg')}
        style={styles.background}>
        <View style={styles.frame1}>
          <Image
            source={require('../assets/antpack-logo.png')}
            style={styles.image}
          />
          <Text style={styles.title}>EMPLOYEE LIST</Text>
          <LookContacts />
        </View>
        <View style={styles.frame2}>
          <QueryList style={styles.query} nav={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  frame1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame2: {
    flex: 1,
    alignItems: 'stretch',
  },
  image: {
    flex: 3,
    width: '60%',
    height: '60%',
  },
  title: {
    color: '#e91e63',
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    fontSize: 20,
  },
  query: {
    flex: 0.5,
  },
});

export default ContactListPort;
