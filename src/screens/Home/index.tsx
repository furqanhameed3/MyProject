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
import {COLORS, Entypo, IMAGES, Ionicons, h} from '../../constants';
import TaskItem from '../../Components/TaskItem';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';

const Home = () => {
  const navigation = useNavigation();

  const SwitchLangData = [
    {name: 'English', image: IMAGES.US_Flag},
    {name: 'German', image: IMAGES.German_Flag},
  ];

  return (
    <>
      {Platform.OS == 'ios' && (
        <SafeAreaView style={{flex: 0, backgroundColor: COLORS.lightBg}} />
      )}
      <View style={styles.container}>
        <Image source={IMAGES.ellipse} style={styles.bgImg} />
        <Image source={IMAGES.ellipse} style={styles.bgLeftImg} />
        <Image source={IMAGES.ellipse} style={styles.bottomImg} />

        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Todo</Text>
          <TaskItem />
        </View>
        <View>
          <Text style={[styles.taskTitle, {marginTop: h('4%')}]}>
            Select Language
          </Text>
        </View>

        <SelectDropdown
          data={SwitchLangData}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            console.log('SelectedItem', selectedItem);

            return (
              <View style={styles.dropdownButtonStyle}>
                {selectedItem && (
                  <Image
                    source={selectedItem.image}
                    style={styles.dropdownButtonIconStyle}
                  />
                )}
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.name) ||
                    'Select your Language'}
                </Text>
                <Ionicons
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: '#D2D9DF'}),
                }}>
                <Image
                  source={item.image}
                  style={styles.dropdownItemIconStyle}
                />
                <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />

        <TouchableOpacity
          style={styles.chatBtn}
          onPress={() => navigation.navigate('Messages')}>
          <Entypo name="chat" size={35} color={COLORS.primary1} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
