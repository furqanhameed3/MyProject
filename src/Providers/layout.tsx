import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StatusBar} from 'react-native';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import {COLORS} from '../constants';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const NativeStack = createNativeStackNavigator();

// export const AuthStack = () => {
//   return (
//     <NativeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="Login">
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//     </NativeStack.Navigator>
//   );
// };

// export const AppStack = () => {
//   return (
//     <>
//       <StatusBar
//         animated={true}
//         translucent={false}
//         backgroundColor={COLORS.white}
//         barStyle="dark-content"
//         showHideTransition={'slide'}
//         hidden={false}
//       />
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//           // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//         }}
//         initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//       </Stack.Navigator>
//     </>
//   );
// };

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
