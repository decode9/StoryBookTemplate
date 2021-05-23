import { AppRegistry, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorybookUI, configure } from '@storybook/react-native';
import { name as appName } from '../../../app.json';

import './rn-addons';

// import stories
configure(() => { require('./stories'); }, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0', asyncStorage: AsyncStorage });

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;