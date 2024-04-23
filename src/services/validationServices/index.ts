import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Please enter a valid email address"
    ),
  password: yup
    .string()
    .min(8, ({ min }) => `Minimum 8 characters please`)
    .max(12, ({ max }) => `Maxximum 12 characters `)
    .required("Invalid password"),
});

export const emailValidation = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Please enter a valid email address"
    ),
});

export const signupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `Minimum 2 characters please`)
    .required("Name is required"),

  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),

  password: yup
    .string()
    .min(8, ({ min }) => `Minimum 8 characters please`)
    .required("Invalid password"),
  confirmPassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),

  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number"),
  // .required('Phone number is required'),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({ min }) => `Minimum 8 characters please`)
    .required("Invalid password"),
  confirmPassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

export const openTradeValidationSchema = yup.object().shape({
  symbol: yup.string().required("Symbol is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  quantity: yup
    .number()
    .moreThan(0, "Quantity must be greater than 0")
    .required("Quantity is required"),
});

export const closeTradeValidationSchema = yup.object().shape({
  type: yup.string().required("Symbol is required"),

  price: yup
    .string()
    // .number()
    // .typeError('Price must be a number')
    // .positive('Price must be greater than 0')
    // .test('maxDigits', 'Price must have at most 7 digits', value => {
    //   if (value !== undefined) {
    //     const stringValue = String(value);
    //     const hasDecimal = stringValue.includes('.');
    //     const digitsOnly = hasDecimal
    //       ? stringValue.replace('.', '')
    //       : stringValue;
    //     return digitsOnly.length <= 7;
    //   }
    //   return true;
    // })
    .required("Price is required"),
  quantity: yup
    .string()
    // .number()
    // .moreThan(0, 'Quantity must be greater than 0')
    // .max(9999999, 'Quantity cannot exceed 7 characters')
    .required("Quantity is required"),
});

export const updateTradeValidationSchema = yup.object().shape({
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  quantity: yup
    .number()
    .moreThan(0, "Quantity must be greater than 0")
    .max(9999999, "Quantity cannot exceed 7 characters")
    .required("Quantity is required"),
});

export const otherValidation = yup.object().shape({
  //   quantity: yup
  //   .number()
  //   .moreThan(0, 'Quantity must be greater than 0')
  //   .max(9999999, 'Quantity cannot exceed 7 characters')
  //   .required('Quantity is required'),
  // // quantity: yup
  // //   .string()
  // //   .matches(
  // //     /^\d{1,7}$/,
  // //     'Quantity must be a whole number with at most 7 digits',
  // //   )
  // //   // .test('isInteger', 'Quantity must be an integer', value => {
  // //   //   if (value !== undefined) {
  // //   //     const floatValue = parseFloat(value);
  // //   //     return Math.floor(floatValue) === floatValue;
  // //   //   }
  // //   //   return true;
  // //   // })
  // //   .required('Quantity is required'),
});

export const updateTradeGoldValidationSchema = yup.object().shape({
  price: yup
    .number()
    .moreThan(0, "Price must be greater than 0")
    .max(9999999, "Price cannot exceed 7 characters")
    .required("Price is required"),
  quantity: yup
    .number()
    .moreThan(0, "Quantity must be greater than 0")
    .max(9999999, "Quantity cannot exceed 7 characters")
    .required("Quantity is required"),
});

export const addTOoWatchListValidationSchema = yup.object().shape({
  symbol: yup.string().required("Symbol is required"),
  price: yup
    .number()
    .moreThan(0, "Price must be greater than 0")
    .max(9999999, "Price cannot exceed 7 characters")
    .required("Price is required"),
  quantity: yup
    .number()
    .moreThan(0, "Quantity must be greater than 0")
    .max(9999999, "Quantity cannot exceed 7 characters")
    .required("Quantity is required"),
});

export const createPortfolioValidation = yup.object().shape({
  portfolioName: yup.string().required("Portfolio Name is required"),
  // initialAmount: yup
  //   .number()
  //   .moreThan(0, 'Price must be greater than 0')
  //   .max(9999999, 'Price cannot exceed 7 characters')
  //   .required('Price is required'),
  // discription: yup.string().required("discription is required"),
});
