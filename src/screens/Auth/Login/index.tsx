import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import {COLORS, w} from '../../../constants';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/Button';
import {Formik} from 'formik';
import {LoginFormValues, initialValues_LoginForm} from '../../../types';
import {loginValidationSchema} from '../../../utils';
import ToastMessage from '../../../Components/ToastMessage';
import {Sing_In} from '../../../services/api';

const Login = ({navigation}: any) => {
  const {showSuccessToast, showErrorToast} = ToastMessage();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      const {message, error} = await Sing_In(values, setIsLoading);
      if (error) {
        showErrorToast(message);
      } else {
        showSuccessToast(message);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Signup Submission Error:', error);
      showErrorToast('An error occurred while signing up. Please try again.');
    }
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
                  loading={isLoading}
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
