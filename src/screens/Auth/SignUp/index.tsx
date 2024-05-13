import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS, h, w} from '../../../constants';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/Button';
import {Formik} from 'formik';
import {SignupFormValues, initialValues_SignupForm} from '../../../types';
import {signupValidationSchema} from '../../../utils';

const SignUp = ({navigation}: any) => {
  const onSubmit = (Values: SignupFormValues) => {
    console.log('Values', Values);
  };
  return (
    <>
      {Platform.OS == 'ios' && (
        <SafeAreaView style={{flex: 0, backgroundColor: COLORS.lightBg}} />
      )}
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Formik
          initialValues={initialValues_SignupForm}
          onSubmit={onSubmit}
          validationSchema={signupValidationSchema}>
          {({
            handleChange,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
            setFieldValue,
            setFieldError,
            setFieldTouched,
          }) => (
            <>
              <CustomInput
                simpleInput
                placeholder="Full Name"
                keyboardType={
                  Platform.OS === 'ios' ? 'ascii-capable' : 'default'
                }
                value={values.name}
                onChangeText={(text: String) => {
                  handleChange('name'), setFieldValue('name', text);
                  if (!touched.name) {
                    setFieldTouched('name');
                  }
                }}
              />
              {errors.name && touched.name && (
                <Text style={styles.txtError}>{errors.name}</Text>
              )}
              <CustomInput
                simpleInput
                placeholder="Email"
                value={values.email}
                onChangeText={(text: String) => {
                  setFieldValue('email', text.toLowerCase());

                  if (!touched.email) {
                    setFieldTouched('email');
                  }
                }}
              />
              {errors.email && touched.email && (
                <Text style={styles.txtError}>{errors.email}</Text>
              )}
              <CustomInput
                simpleInput
                placeholder="Phone Number"
                onChangeText={(text: Number) => {
                  setFieldValue('phone', text);
                  if (!touched.phone) {
                    setFieldTouched('phone');
                  }
                }}
                keyboardType="phone-pad"
              />
              {errors.phone && touched.phone && (
                <Text style={styles.txtError}>{errors.phone}</Text>
              )}
              <CustomInput
                passwordInput
                placeholder="Password"
                onChangeText={(text: string) => {
                  setFieldValue('password', text);
                  if (!touched.password) {
                    setFieldTouched('password');
                  }
                }}
                keyboardType={
                  Platform.OS === 'ios' ? 'ascii-capable' : 'default'
                }
              />
              {errors.password && touched.password && (
                <Text style={styles.txtError}>{errors.password}</Text>
              )}
              <View style={styles.btnContainer}>
                <Button
                  onPress={() => handleSubmit()}
                  regularBtn
                  title="Sign Up"
                />
              </View>
            </>
          )}
        </Formik>

        <Text style={styles.simpleTxt}>Or</Text>
        <View style={[styles.btnContainer, {marginTop: h('1%')}]}>
          <Button google socialBtn title="Sign Up With Gooogle" />
          <Button socialBtn title="Sign Up With Facebook" />
        </View>
        <View style={styles.signupView}>
          <Text style={styles.txtAcc}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.txtSignup, {marginLeft: w(1)}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;
