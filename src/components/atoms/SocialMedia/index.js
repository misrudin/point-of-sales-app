import React from 'react';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../utils';

const SocialMediaButotn = ({icon = 'google', bg, color, onPress}) => {
  return (
    <Ripple
      onPress={onPress}
      rippleColor={colors.ripple}
      style={styles.button(bg)}>
      <Icon size={30} name={icon} color={color} />
    </Ripple>
  );
};

export default React.memo(SocialMediaButotn);

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
