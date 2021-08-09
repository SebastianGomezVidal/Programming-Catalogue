import * as React from 'react';
import {StyleSheet, Linking, Alert} from 'react-native';
import {FAB} from 'react-native-paper';

/* Component that calls a default external
application to send an email to the specific
electronic address of the employee.

WHATCH OUT => YOU NEED TO HAVE INSTALLED AN
EMAIL APP INSIDE YOUR IOS SIMULATOR OTHERWISE
YOU WILL GET AN ERROR */

const Mail = ({email}) => (
  <FAB
    style={styles.fab}
    medium
    icon="gmail"
    onPress={() =>
      Linking.canOpenURL('mailto:' + email)
        .then(supported => {
          if (!supported) {
            console.log('Cant handle url');
            Alert.alert('Problems reaching your email app');
          } else {
            return Linking.openURL('mailto:' + email);
          }
        })
        .catch(err => {
          console.error('An error occurred', err);
          Alert.alert('Try Again Later');
        })
    }
  />
);

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#7c4dff',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Mail;
