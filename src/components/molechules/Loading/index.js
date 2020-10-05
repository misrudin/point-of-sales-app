import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Label, Spacer} from '../../atoms';
import {Loading5} from '../../../assets';
import LottieView from 'lottie-react-native';

const LoadingComponent = () => {
  return (
    <View style={styles.containerLoading}>
      <StatusBar backgroundColor="rgba(0,0,0,.0)" animated />
      <View style={styles.boxLoading}>
        <View style={styles.loadingElement}>
          <LottieView source={Loading5} autoPlay loop />
        </View>
        <Spacer h={0} />
        <Label text="Loading ..." color={'#fff'} />
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
    backgroundColor: 'rgba(0,0,0,.9)',
    width: 150,
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,

    elevation: 10,
  },

  loadingElement: {
    height: 50,
    width: 50,
  },
});
