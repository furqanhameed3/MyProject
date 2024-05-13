import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

import {COLORS, w} from '../../../constants';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/Button';
import {Formik} from 'formik';
import {LoginFormValues, initialValues_LoginForm} from '../../../types';
import {loginValidationSchema} from '../../../utils';

const Login = ({navigation}: any) => {
  const onSubmit = (values: LoginFormValues) => {
    console.log('Values Submit', values);
  };
  return (
    <>
      {Platform.OS == 'ios' && (
        <SafeAreaView style={{flex: 0, backgroundColor: COLORS.lightBg}} />
      )}
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Formik
          initialValues={initialValues_LoginForm}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}>
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
                placeholder="Email"
                value={values.email}
                onChangeText={(text: any) => {
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
                forgot
                passwordInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={styles.txtError}>{errors.password}</Text>
              )}
              <View style={styles.btnContainer}>
                <Button
                  onPress={() => handleSubmit()}
                  regularBtn
                  title="Login"
                />
              </View>
            </>
          )}
        </Formik>

        <Text style={styles.simpleTxt}>Or</Text>
        <View style={styles.btnContainer}>
          <Button google socialBtn title="Sign In With Gooogle" />
          <Button socialBtn title="Sign In With Facebook" />
        </View>
        <View style={styles.signupView}>
          <Text style={styles.txtAcc}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.txtSignup, {marginLeft: w(1)}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
