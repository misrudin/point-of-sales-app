/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {StatusBar} from 'react-native';
import React from 'react';
import {colors} from './src/utils';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';

const MainApp = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          animated
          backgroundColor={colors.background}
          barStyle="dark-content"
          translucent={true}
        />
        <Router />
      </NavigationContainer>
    </>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
