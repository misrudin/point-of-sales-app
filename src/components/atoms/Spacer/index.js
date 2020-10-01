import React from 'react';
import {StyleSheet, View} from 'react-native';

const SpacerComponent = ({h, w, f}) => {
  return <View style={styles.space(h, w, f)} />;
};

export default React.memo(SpacerComponent);

const styles = StyleSheet.create({
  space: (h, w, f) => {
    return {
      height: h,
      width: w,
      flex: f,
    };
  },
});
