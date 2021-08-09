/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './routes/routes';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
}

export default App;
