import React from 'react';
import {StyleSheet, ActivityIndicator, View, StatusBar} from 'react-native';
import {colors} from '../../../utils';
import {Label, Spacer} from '../../atoms';

const LoadingComponent = () => {
  return (
    <View style={styles.containerLoading}>
      <StatusBar backgroundColor="rgba(0,0,0,.0)" animated />
      <View style={styles.boxLoading}>
        <ActivityIndicator size="small" color={colors.error} animating />
        <Spacer h={5} />
        <Label text="Loading ..." />
      </View>
    </View>
  );
};

export default React.memo(LoadingComponent);

const styles = StyleSheet.create({
  containerLoading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.0)',
  },
  boxLoading: {
    backgroundColor: '#fff',
    width: 150,
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
