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
import {Loading} from './src/components';

import {Provider, useSelector} from 'react-redux';
import store from './src/redux';
console.disableYellowBox = true;

const MainApp = () => {
  const state = useSelector((value) => value.appState);
  console.log(state);
  return (
    <NavigationContainer>
      <Router />
      {state.loading && <Loading />}
    </NavigationContainer>
  );
};

const WrapperApp = () => {
  return (
    <Provider store={store}>
      <StatusBar
        animated
        backgroundColor={'rgb(18,134,255)'}
        barStyle="dark-content"
        translucent={true}
      />
      <MainApp />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => WrapperApp);
