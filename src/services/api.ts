import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import {LoginFormValues, SignupFormValues} from '../types';
import {dispatch} from '../redux/store';
import {saveUid, saveUser} from '../redux/slices/employeeSlice';
export const Sign_up = async (values: SignupFormValues, setIsLoading: any) => {
  const {name, email, phone, password} = values;

  try {
    setIsLoading(true);
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    setIsLoading(false);
    // Get the newly created user
    const user = userCredential.user;

    return {error: false, message: 'User account created & signed in!', user};
  } catch (error: any) {
    setIsLoading(false);
    let errorMessage = 'An error occurred while signing up.';

    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'That email address is already in use!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'The email address is invalid!';
    }

    console.error('Signup Error:', error);
    return {error: true, message: errorMessage};
  }
};

export const saveDetails = async (values: SignupFormValues, id: any) => {
  try {
    const userData: any = {
      fullName: values.name,
      phoneNumber: values.phone,
      email: values.email,
    };
    const userDocument = await firestore()
      .collection('Users')
      .doc(id)
      .set(userData)
      .then(() => {
        console.log('User data stored in Firestore:', userData);
      });
    // await database()
    //   .ref(`users/${id}`)
    //   .set(userData)
    //   .then(() => {
    //     console.log('User data stored in Realtime Database:', userData);
    //   });
  } catch (error) {
    console.error('Signup Error:', error);
  }
};

export const Sing_In = async (values: LoginFormValues, setIsLoading: any) => {
  const {email, password} = values;
  try {
    setIsLoading(true);
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;

    console.log('User signed in:', user.email);
    setIsLoading(false);
    dispatch(saveUid(user.uid));
    dispatch(saveUser(user.email));
    return {error: false, message: 'Sign In successfully!'};
  } catch (error: any) {
    setIsLoading(false);
    let errorMessage = 'An error occurred while signing up.';
    if (error.code === 'auth/invalid-credential') {
      errorMessage = 'The email or password is invalid!';
    }
    console.error('SignIn Error:', error);
    return {error: true, message: errorMessage};
  }
};
