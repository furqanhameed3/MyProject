import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Messages from '../screens/messages';
import Profile from '../screens/profile';
import Search from '../screens/Search';
import {COLORS} from '../constants';

type BottomTabparamList = {
  Home: undefined;
  Messages: undefined;
  Search: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabparamList>();

const screenOptions = ({route}: any) => ({
  headerShown: false,
  tabBarStyle: {
    backgroundColor: COLORS.white,
  },
  tabBarLabel: ({focused, color}: any) => {},
});

const BottomTabNavigator = () => {
  return (
    <View>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigator;
