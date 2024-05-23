import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import Home from '../screens/Home';
import Chat from '../screens/chat';
import {COLORS} from '../constants';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const NativeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </NativeStack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        showHideTransition={'slide'}
        hidden={false}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </>
  );
};
export const Main_Stack = () => {
  const {uid} = useSelector((state: any) => state.employeeReducer);
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {uid ? (
          <Stack.Screen name="AppStack" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
