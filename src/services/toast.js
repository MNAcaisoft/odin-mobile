import { Toast } from 'native-base';

export function showToast(type, text, config) {
  let defaultConfig = {
    duration: 3000,
    position: 'top',
    buttonText: '',
  };
  if (config) {
    defaultConfig = { ...defaultConfig, ...config };
  }
  if (type === 'error') {
    type = 'danger';
  }
  Toast.show({ ...defaultConfig, text, type });
}
