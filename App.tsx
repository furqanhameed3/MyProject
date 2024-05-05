/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home';
import Realm from './src/Providers/Realm';
import Layout from './src/Providers/Layout';
function App(): React.JSX.Element {
  return (
    <>
      <Realm>
        <Layout />
      </Realm>
    </>
  );
}

export default App;
