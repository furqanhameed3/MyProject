/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home';
import Realm from './src/Providers/Realm';
import {Main_Stack} from './src/Providers/layout';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <>
      <Realm>
        <Main_Stack />
        <Toast />
      </Realm>
    </>
  );
}

export default App;
