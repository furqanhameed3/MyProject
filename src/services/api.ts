import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {SignupFormValues} from '../types';
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
    const userData = {
      fullName: values.name,
      phoneNumber: values.phone,
      email: values.email,
    };
    await database()
      .ref(`users/${id}`)
      .set(userData)
      .then(() => {
        console.log('User data stored in Realtime Database:', userData);
      });
  } catch (error) {
    console.error('Signup Error:', error);
  }
};
