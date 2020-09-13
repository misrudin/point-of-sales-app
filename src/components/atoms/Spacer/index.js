import React from 'react';
import {StyleSheet, View} from 'react-native';

const SpacerComponent = ({h, w}) => {
  return <View style={styles.space(h, w)} />;
};

export default SpacerComponent;

const styles = StyleSheet.create({
  space: (h, w) => {
    return {
      height: h,
      width: w,
    };
  },
});
