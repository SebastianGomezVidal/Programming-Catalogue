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

/* Home portrait Component */
const ContactListLand = ({navigation}) => {
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
    flexDirection: 'row',
  },
  frame1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame2: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  image: {
    width: '60%',
    height: '40%',
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

export default ContactListLand;
