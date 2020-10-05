import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {fonts, getData, userHaveStore} from '../../utils';
import {Box} from '../../components';
import {useDispatch} from 'react-redux';

import {UpdateAnimate} from '../../assets';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData('uid').then((res) => {
      if (res) {
        getData('userData').then((user) => {
          if (user) {
            getData('userHaveStore').then((storeFromLocal) => {
              if (storeFromLocal) {
                dispatch({type: 'LOGIN', userData: user, uid: res.uid});
                dispatch({type: 'SPLASH'});
                dispatch({type: 'STORE', store: storeFromLocal});
              } else {
                userHaveStore(res.uid).then((store) => {
                  if (store) {
                    dispatch({type: 'STORE', store});
                  }
                  dispatch({type: 'LOGIN', userData: user, uid: res.uid});
                  dispatch({type: 'SPLASH'});
                });
              }
            });
          } else {
            dispatch({type: 'SPLASH'});
          }
        });
      } else {
        dispatch({type: 'SPLASH'});
      }
    });
  }, [dispatch]);

  return (
    <Box bg={'rgb(18,134,255)'} style={styles.container}>
      <LottieView source={UpdateAnimate} autoPlay loop />
    </Box>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(18,134,255)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 20,
  },
});
