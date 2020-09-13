import React from 'react';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {Label} from '../index';

const ButtonComponent = ({text, color, bg}) => {
  return (
    <Ripple style={styles.button(bg)}>
      <Label text={text} size={16} center color={color} />
    </Ripple>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: (bg) => {
    return {
      backgroundColor: bg,
      paddingVertical: 14,
      borderRadius: 4,
    };
  },
});
