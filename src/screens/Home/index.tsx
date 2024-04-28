import {Text, Platform, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {IMAGES, Ionicons} from '../../constants';

const Home = () => {
  return (
    <>
      {Platform.OS == 'ios' && (
        <SafeAreaView style={{flex: 0, backgroundColor: '#4A3780'}} />
      )}
      <View style={styles.container}>
        <Image source={IMAGES.ellipse} style={styles.bgImg} />
        <Image source={IMAGES.ellipse} style={styles.bgLeftImg} />
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Todo</Text>
          <View style={styles.taskItem}>
            <Text>Task 1</Text>
            <Ionicons name="close-sharp" size={20} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
