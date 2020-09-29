import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, getData, userHaveStore} from '../../utils';
import {Box} from '../../components';
import {Loading} from '../../components';
import {useDispatch} from 'react-redux';

const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData('uid').then((res) => {
      console.log(res);
      if (res.uid) {
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
    <Box style={styles.container}>
      <View>
        <Text style={styles.text}>Heloo App</Text>
      </View>
      <Loading />
    </Box>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 20,
  },
});
