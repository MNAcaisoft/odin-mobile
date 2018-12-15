import { Toast } from 'native-base';

export function showToast(type, text, config) {
  let defaultConfig = {
    duration: 3000,
    position: 'bottom',
    buttonText: 'Okay',
  };
  if (config) {
    defaultConfig = { ...defaultConfig, ...config };
  }
  Toast.show({ ...defaultConfig, text, type });
}
