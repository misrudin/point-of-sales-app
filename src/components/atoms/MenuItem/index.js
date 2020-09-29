import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ripple from 'react-native-material-ripple';
import {Label, Spacer} from '..';

const MenuItem = ({icon = 'home', text = 'Home', onPress}) => {
  return (
    <Ripple onPress={onPress} style={styles.menuItem}>
      <View style={styles.containerIcon}>
        <Icon name={icon} color="red" size={18} />
      </View>
      <Spacer w={10} />
      <Label text={text} size={18} />
    </Ripple>
  );
};

export default React.memo(MenuItem);

const styles = StyleSheet.create({
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
