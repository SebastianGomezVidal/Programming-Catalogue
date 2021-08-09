import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

/*Importing the portrait and landscape view of the Home screen,
the employee details screen is left as it is since it renders well
in both situations*/
import HomePort from '../utils/ContactListPort';
import HomeLand from '../utils/ContactListLand';

/* Importing component where there is the consumption
of the jsonplaceholder values */
import QueryList from '../utils/QueryList';

/* Importing component searchbar*/
import LookContacts from '../utils/LookContacts';

/* Home screen */
const contactList = props => {
  //Hook to know the orientation of Home
  const [orientation, setOrientation] = useState('portrait');

  //Returns true if the screen is in portrait mode
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });

  if (orientation === 'portrait') {
    /*Passing the navigation object to jump between
    screens*/
    return <HomePort navigation={props.navigation} />;
  } else {
    return <HomeLand navigation={props.navigation} />;
  }
};

export default contactList;
