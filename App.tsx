/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home';
import Realm from './src/Providers/Realm';
function App(): React.JSX.Element {
  return (
    <>
      <Realm>
        <Home />
      </Realm>
    </>
  );
}

export default App;
