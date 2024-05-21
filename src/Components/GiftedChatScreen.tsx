import React, {useEffect, useCallback, useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {COLORS, Entypo, w, shadow, h} from '../constants';

const GiftedChatScreen = ({navigation}: any) => {
  const [messages, setMessages] = useState([]);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.primary1 + 30,
            borderRadius: 15,
            marginBottom: 5,
            // borderBottomRightRadius: 5,
          },
          left: {
            backgroundColor: COLORS.primary2 + 30,
            borderRadius: 15,
            marginBottom: 5,
          },
        }}
        textStyle={{
          right: styles.txtContent,
          left: styles.txtContent,
        }}
      />
    );
  };
  const renderSend = (props: any) => {
    return (
      <Send
        {...props}
        containerStyle={{
          height: w('7%'),
          width: w('7%'),
          borderRadius: w('4%'),
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: h('1%'),
          marginRight: w('1.5%'),
        }}>
        <View
          // angle={130}
          style={{
            height: w('7%'),
            width: w('7%'),
            borderRadius: w('4%'),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary1,
          }}>
          <Entypo name="paper-plane" color={COLORS.white} size={18} />
        </View>
      </Send>
    );
  };

  const renderInputToolbar = (props: any) => {
    //Add the extra styles via containerStyle
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius: 10,
          marginBottom: h('1%'),
          ...shadow,
        }}
      />
    );
  };
  return (
    <GiftedChat
      messages={messages}
      // onSend={(messages: any) => onSend(messages)}
      // user={{
      //   _id: user?.id,
      // }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      renderInputToolbar={renderInputToolbar}
      timeTextStyle={{right: {color: '#9999'}}}
    />
  );
};

const styles = StyleSheet.create({
  txtContent: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default GiftedChatScreen;
