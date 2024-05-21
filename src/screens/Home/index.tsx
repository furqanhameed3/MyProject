import {
  Text,
  Platform,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLORS, Entypo, IMAGES, Ionicons} from '../../constants';
import TaskItem from '../../Components/TaskItem';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      {Platform.OS == 'ios' && (
        <SafeAreaView style={{flex: 0, backgroundColor: COLORS.lightGray}} />
      )}
      <View style={styles.container}>
        <Image source={IMAGES.ellipse} style={styles.bgImg} />
        <Image source={IMAGES.ellipse} style={styles.bgLeftImg} />
        <Image source={IMAGES.ellipse} style={styles.bottomImg} />

        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Todo</Text>
          <TaskItem />
        </View>

        <TouchableOpacity
          style={styles.chatBtn}
          onPress={() => navigation.navigate('Chat')}>
          <Entypo name="chat" size={35} color={COLORS.primary1} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
