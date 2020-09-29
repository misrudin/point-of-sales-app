import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const LabelComponent = ({text, color = colors.dark1, size, center}) => {
  return <Text style={styles.text(size, color, center)}>{text}</Text>;
};

export default React.memo(LabelComponent);

const styles = StyleSheet.create({
  text: (size, color, center) => {
    return {
      fontFamily: fonts.primary.normal,
      fontSize: size,
      color: color,
      textAlign: center ? 'center' : 'left',
    };
  },
});
