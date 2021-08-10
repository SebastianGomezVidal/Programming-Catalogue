import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import {Surface} from 'react-native-paper';
import Mail from '../utils/Mail';
import {useSelector} from 'react-redux';

const employeeInfo = props => {
  // Hook to store and retrieve the jsonplaceholder object
  const {list} = useSelector(state => state.listReducer);

  console.log(list.length);

  // Extract info of the specific employee
  var userInfo; 
  // Array of objects
  if(list.length > 1) 
    userInfo = list[props.navigation.state.params];
  // One specific employee on the lisr
  else 
    userInfo = list[0] ;

  console.log (userInfo);

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/colors-abstraction.jpg')}
        style={styles.background}>
        <View style={styles.frame}>
          <Surface style={styles.surface}>
            <Text style={styles.text}>
              <Text style={styles.subtext}>Username: </Text> {userInfo.username}
              {'\n'}
              <Text style={styles.subtext}>e-mail: </Text> {userInfo.email}
              {'\n'}
              <Text style={styles.subtext}>Address: </Text>
              {userInfo.address.street}, {userInfo.address.city} {'\n'}
              <Text style={styles.subtext}>Zipcode: </Text>
              {userInfo.address.zipcode} {'\n'}
              <Text style={styles.subtext}>Phone: </Text>
              {userInfo.phone.replace(/[.\s]/g, '-').split('x')} {'\n'}
              <Text style={styles.subtext}>Prev.company: </Text>
              {userInfo.company.name} {'\n'}
              <Text style={styles.subtext}>Website: </Text> {userInfo.website}
            </Text>
          </Surface>
        </View>
        <Mail email={userInfo.email} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default employeeInfo;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  surface: {
    margin: 10,
    padding: 10,
    elevation: 10,
  },
  subtext: {
    color: '#3d5afe',
  },
  text: {
    textAlign: 'left',
    color: '#e91e63',
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
    padding: 10,
  },
});
