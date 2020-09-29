import React from 'react';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {Label} from '../index';
import {colors} from '../../../utils';

const ButtonComponent = ({text, color, bg, onPress}) => {
  return (
    <Ripple
      rippleColor={colors.ripple}
      style={styles.button(bg)}
      onPress={onPress}>
      <Label text={text} size={16} center color={color} />
    </Ripple>
  );
};

export default React.memo(ButtonComponent);

const styles = StyleSheet.create({
  button: (bg) => {
    return {
      backgroundColor: bg,
      paddingVertical: 14,
      borderRadius: 4,
    };
  },
});
