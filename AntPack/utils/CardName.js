import React from 'react';
import {Pressable, Text, Alert, StyleSheet} from 'react-native';

/* Component that displays the name of each
employee and that on touch navigates to the
specific employee details */

const CardName = ({id, name, nav}) => {
    
  /* Function that detects the touch 
  over the employee displayed name */

  const onPressFunction = () => {
    nav.navigate('UserDetails', id);
  };

  /* Return a pressable component */
  return (
    <Pressable style={styles.touch} onPress={onPressFunction}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#ffffff',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ff3d00',
    borderWidth: 3,
    elevation: 50,
  },
  text: {
    color: '#e91e63',
    fontSize: 20,
  },
});

export default CardName;
