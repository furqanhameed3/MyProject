import * as yup from 'yup';

const signupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Full Name is required')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Full Name can only contain Alphabets.',
    ),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid Email (test@example.com)',
    ),
  phone: yup.string().required('Phone Number is required'),
  // .min(10, 'Phone Number must be at least 10 characters i.e. 05XXXXXXXX')
  // .max(10, 'Phone Number must be at least 10 characters i.e. 05XXXXXXXX')
  // .matches(
  //   /^\d{10}$/,
  //   'Phone Number must be at least 10 characters i.e. 05XXXXXXXX',
  // ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  // confirmPassword: yup
  //   .string()
  //   .required("Confirm Password is required")
  //   .oneOf([yup.ref("password")], "Passwords must match"),
});
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid Email (test@example.com)',
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
const forgotValidationSchema = yup.object().shape({
  phone_number: yup
    .string()
    .required('Phone Number is required')
    .min(10, 'Phone Number must be at least 10 characters')
    .matches(/^05\d{8}$/, 'Enter valid format i.e. 05XXXXXXXX'),
});
const resetPasswordValidationSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});
const addUnavailabilityValidationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(20, 'Title must have less than 20 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Title can only contain Alphabets.',
    ),
  note: yup
    .string()
    .required('Note is required')
    .min(1, 'Note must be at least 1 characters')
    .max(1000, 'Note must have less than 1000 characters'),
});
const addIncidentValidationSchema = yup.object().shape({
  formName: yup
    .string()
    .required('Form Name is required')
    .min(3, 'Form Name must be at least 3 characters')
    .max(50, 'Form Name must have less than 50 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Form Name can only contain Alphabets.',
    ),
  requiredAction: yup
    .string()
    .required('Required Action is required')
    .min(3, 'Required Action must be at least 3 characters')
    .max(50, 'Required Action must have less than 50 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Required Action can only contain Alphabets.',
    ),
  description: yup
    .string()
    .required('Description is required')
    .min(1, 'Description must be at least 1 characters')
    .max(1000, 'Description must have less than 1000 characters'),
});
const addDocumentValidationSchema = yup.object().shape({
  docName: yup
    .string()
    .required('Document Name is required')
    .min(3, 'Document Name must be at least 3 characters')
    .max(20, 'Document Name must have less than 20 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Documnet Name can only contain Alphabets.',
    ),
  docType: yup
    .string()
    .required('Document Type is required')
    .min(3, 'Document Type must be at least 3 characters')
    .max(20, 'Document Type must have less than 20 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Documnet Type can only contain Alphabets.',
    ),
  note: yup.string(),
});

const editEmergencyValidationSchema = yup.object().shape({
  emergencyDetails: yup
    .string()
    .min(3, 'Emergency Details must be at least 3 characters')
    .max(50, 'Emergency Details must have less than 50 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Emergency Details can only contain Alphabets.',
    ),
  emergencyNumber: yup
    .string()
    .min(7, 'Emergency Number must be at least 7 characters')
    .max(15, 'Emergency Number must have less than 15 characters')
    .matches(/^\d+$/, 'Emergency Number can only contain Digits.'),
  address: yup
    .string()
    .min(1, 'Address must be at least 1 characters')
    .max(100, 'Address must have less than 100 characters'),
  zipCode: yup
    .string()
    .min(4, 'Zip Code must be at least 4 characters')
    .max(10, 'Zip Code must have less than 10 characters')
    .matches(/^\d+$/, 'Zip Code can only contain Digits.'),
});
const editProfileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, 'Full Name must be at least 3 characters')
    .max(50, 'Full Name must have less than 50 characters')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Full Name can only contain Alphabets.',
    )
    .required('Full name is required'),
  // bio: yup
  //   .string()
  //   .trim()
  //   .min(3, 'Bio must be at least 3 characters')
  //   .max(50, 'Bio must have less than 50 characters')
  //   .required('Bio is required'),
  user_name: yup
    .string()
    .trim()
    .matches(/^(\S+$)/g, ' This field cannot contain only blankspaces')
    .required('username is required'),
  phone: yup
    .string()
    .required('Phone Number is required')
    .min(10, 'Phone Number must be at least 10 characters')
    .matches(/^05\d{8}$/, 'Enter valid format i.e. 05XXXXXXXX'),
  gender: yup.string().required('Gender is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  // major: yup
  //   .string()
  //   .trim()
  //   .min(3, 'Major must be at least 3 characters')
  //   .max(50, 'Major must have less than 50 characters')
  //   .required('Major is required'),
  // interest: yup
  //   .string()
  //   .trim()
  //   .min(3, 'Interest must be at least 3 characters')
  //   .max(50, 'Interest must have less than 50 characters')
  //   .required('Interest is required'),
  // university_id: yup.string().required("University Id must be selected"),
  // country: yup
  //   .string()
  //   .trim()
  //   .min(3, 'Country must be at least 3 characters')
  //   .max(50, 'Country must have less than 50 characters')
  //   .matches(
  //     /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
  //     'Country can only contain Alphabets.',
  //   )
  //   .required('Country is required'),
  // district: yup
  //   .string()
  //   .trim()
  //   .min(3, 'District must be at least 3 characters')
  //   .max(50, 'District must have less than 50 characters')
  //   .matches(
  //     /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
  //     'District can only contain Alphabets.',
  //   )
  //   .required('District is required'),
  // city: yup
  //   .string()
  //   .trim()
  //   .min(3, 'City must be at least 3 characters')
  //   .max(50, 'City must have less than 50 characters')
  //   .matches(
  //     /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
  //     'City can only contain Alphabets.',
  //   )
  //   .required('City is required'),
  // street: yup
  //   .string()
  //   .trim()
  //   .min(1, 'Street must be at least 1 characters')
  //   .max(50, 'Street must have less than 50 characters')
  //   .required('Street is required'),
});

export {
  signupValidationSchema,
  loginValidationSchema,
  forgotValidationSchema,
  resetPasswordValidationSchema,
  addUnavailabilityValidationSchema,
  addIncidentValidationSchema,
  addDocumentValidationSchema,
  editProfileValidationSchema,
  editEmergencyValidationSchema,
};
