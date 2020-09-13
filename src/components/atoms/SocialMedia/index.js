import React from 'react';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SocialMediaButotn = ({icon = 'google', bg, color}) => {
  return (
    <Ripple style={styles.button(bg)}>
      <Icon size={30} name={icon} color={color} />
    </Ripple>
  );
};

export default SocialMediaButotn;

const styles = StyleSheet.create({
  button: (bg) => {
    return {
      backgroundColor: bg,
      borderRadius: 4,
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
});
