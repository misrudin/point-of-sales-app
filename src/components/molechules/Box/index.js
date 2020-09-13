import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../../../utils';

const BoxcomponentContainer = ({children, center}) => {
  return (
    <SafeAreaView style={styles.container(center)}>{children}</SafeAreaView>
  );
};

export default BoxcomponentContainer;

const styles = StyleSheet.create({
  container: (center) => {
    return {
      flex: 1,
      paddingHorizontal: 12,
      backgroundColor: colors.background,
      justifyContent: center ? 'center' : 'flex-start',
      alignItems: center ? 'center' : 'flex-start',
    };
  },
});
