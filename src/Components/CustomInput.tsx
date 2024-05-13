import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, Ionicons, h} from '../constants';

const CustomInput = ({
  simpleInput,
  placeholder,
  passwordInput,
  forgot,
  value,
  onChangeText,
  onBlur,
  multiline,
  ...rest
}: any) => {
  const [isPassVisible, setIsPassVisible] = useState(true);
  return (
    <>
      {simpleInput ? (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray}
            style={{flex: 1, height: h('5.5%')}}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            multiline={multiline}
            keyboardType={rest.keyboardType}
            maxLength={rest.maxLength}
          />
        </View>
      ) : passwordInput ? (
        <>
          <View style={styles.inputPassView}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={COLORS.gray}
              secureTextEntry={isPassVisible}
              style={{flex: 1, height: h('5.5%')}}
              value={value}
              onChangeText={onChangeText}
              onBlur={onBlur}
              keyboardType={rest.keyboardType}
              maxLength={rest.maxLength}
            />
            <Ionicons
              name={isPassVisible ? 'eye-off' : 'eye'}
              size={20}
              onPress={() => setIsPassVisible(!isPassVisible)}
              color={COLORS.primary1}
            />
          </View>
          {forgot ? (
            <TouchableOpacity style={{alignSelf: 'flex-end'}}>
              <Text style={styles.forgotTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          ) : null}
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.black,
    borderWidth: 0.8,
    borderRadius: 10,
    height: h('5.5%'),
    width: '100%',
    justifyContent: 'center',
    padding: h('0.8%'),
    marginTop: h('2%'),
    paddingHorizontal: h('1.5%'),
  },
  inputPassView: {
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.black,
    borderWidth: 0.8,
    borderRadius: 10,
    height: h('5.5%'),
    width: '100%',
    padding: h('0.8%'),
    marginTop: h('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: h('1.5%'),
  },
  forgotTxt: {
    color: COLORS.redNCS,
    fontSize: 14,
    fontWeight: '500',
    marginVertical: h('1%'),
  },
});

export default CustomInput;
