import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Box} from '../../components';
// import {Loading} from '../../components';

const SplashScreen = () => {
  return (
    <Box style={styles.container}>
      <View>
        <Text style={styles.text}>Heloo App</Text>
      </View>
      {/* <Loading /> */}
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
