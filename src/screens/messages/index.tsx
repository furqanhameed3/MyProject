import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, IMAGES, Ionicons, h, w} from '../../constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const Messages = () => {
  useEffect(() => {
    getUSers();
  }, []);
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  const {user} = useSelector((state: any) => state.employeeReducer);

  const getUSers = () => {
    let tempData: any = [];
    firestore()
      .collection('Users')
      .where('email', '!=', user)
      .get()
      .then((res: any) => {
        console.log('res', res.docs);

        if (res.docs != []) {
          res.docs.map((item: any) => {
            tempData.push(item.data());
          });
        }

        setUsers(tempData);
      });
  };

  return (
    <>
      {Platform.OS == 'ios' && (
        <SafeAreaView style={{flex: 0, backgroundColor: COLORS.primary1}} />
      )}
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Message</Text>
          <View style={styles.searchWrapper}>
            <Ionicons name="search" size={20} color={COLORS.gray} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLORS.gray}
              style={{
                height: h('6%'),
                flex: 1,
                marginLeft: h('0.5%'),
              }}
            />
          </View>
        </View>
        <View style={styles.messageContainer}>
          <FlatList
            data={users}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}: any) => {
              console.log('item', item);

              // let isLast = messageData?.length - 1 === index;
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Chat', {item})}
                  style={styles.messageItem}>
                  <Text style={styles.nameTxt}>{item.fullName}</Text>
                  <Text style={styles.emailTxt}>{item.email}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Messages;
