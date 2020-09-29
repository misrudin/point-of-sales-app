import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';

const DividerComponent = () => {
  return <View style={styles.line} />;
};

export default React.memo(DividerComponent);

const styles = StyleSheet.create({
  line: {
    borderColor: colors.white,
    borderBottomWidth: 1,
    width: '100%',
  },
});
