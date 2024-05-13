import {Text, Platform, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLORS, IMAGES, Ionicons} from '../../constants';
import TaskItem from '../../Components/TaskItem';

const Home = () => {
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
      </View>
    </>
  );
};

export default Home;
