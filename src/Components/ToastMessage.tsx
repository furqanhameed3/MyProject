import Toast from 'react-native-toast-message';

const ToastMessage = () => {
  const showSuccessToast = (message?: string) => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message ? message : 'Success',
    });
  };

  const showErrorToast = (message?: string) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message ? message : 'Error',
    });
  };
  return {showSuccessToast, showErrorToast};
};

export default ToastMessage;