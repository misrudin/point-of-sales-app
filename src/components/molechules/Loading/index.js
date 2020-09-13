import React from 'react';
import {StyleSheet, ActivityIndicator, View, StatusBar} from 'react-native';
import {colors} from '../../../utils';

const LoadingComponent = () => {
  return (
    <View style={styles.containerLoading}>
      <StatusBar backgroundColor="rgba(0,0,0,.3)" animated />
      <ActivityIndicator size="small" color={colors.secondary} animating />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  containerLoading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
});
