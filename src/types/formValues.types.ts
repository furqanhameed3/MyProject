// SignupFormValues
export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
}
const initialValues_SignupForm: SignupFormValues = {
  name: '',
  email: '',
  password: '',
  phone: '',
};

export interface googleIdToekn {
  idToken: string;
}

const initial_googleIdToekn: googleIdToekn = {
  idToken: '',
};
// LoginFormValues
export interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues_LoginForm: LoginFormValues = {
  email: __DEV__ ? 'ali@email.com' : '',
  password: __DEV__ ? '123456789' : '',
};

// ForgotFormValues
export interface ForgotFormValues {
  phone_number: string;
}
const initialValues_ForgotForm: ForgotFormValues = {
  phone_number: __DEV__ ? '' : '',
};
// ForgotFormValues
export interface ResetPassFormValues {
  newPassword: string;
  confirmPassword: string;
}
const initialValues_ResetPassForm: ResetPassFormValues = {
  newPassword: '',
  confirmPassword: '',
};

//AddUnavailabilityFormValues

export interface ProfileFormValues {
  name: string;
  bio: string;
  major: string;
  interest: string;
  university_id: number;
  country: string;
  district: string;
  city: string;
  street: string;
}
const initialValues_Profile: ProfileFormValues = {
  name: '',
  bio: '',
  major: '',
  interest: '',
  university_id: 0,
  country: '',
  district: '',
  city: '',
  street: '',
};

export interface UpdateProfile {
  name: string;
  user_name: string;
  bio: string;
  birthday: String;
  phone: string;
  password: string;
}

const initialValues_UpdateProfile: UpdateProfile = {
  name: '',
  bio: '',
  user_name: '',
  birthday: '',
  phone: '',
  password: '',
};

// EXPORTS
export {
  initialValues_SignupForm,
  initialValues_LoginForm,
  initialValues_ForgotForm,
  initialValues_ResetPassForm,
};
