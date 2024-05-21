import {View, Text} from 'react-native';
import React from 'react';

import GiftedChatScreen from '../../Components/GiftedChatScreen';
import {h} from '../../constants';

const Chat = () => {
  return (
    <View style={{flex: 1, marginHorizontal: h('2%'), marginBottom: h('2%')}}>
      <GiftedChatScreen />
    </View>
  );
};

export default Chat;
