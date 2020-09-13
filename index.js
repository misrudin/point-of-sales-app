/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Main} from './src/pages';
import {name as appName} from './app.json';
import {StatusBar} from 'react-native';
import React from 'react';
import {colors} from './src/utils';

const MainApp = () => {
  return (
    <>
      <StatusBar
        animated
        backgroundColor={colors.background}
        barStyle="dark-content"
      />
      <Main />
    </>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
