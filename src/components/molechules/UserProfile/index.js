import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Spacer, Label} from '../../atoms';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ripple from 'react-native-material-ripple';
import {colors} from '../../../utils';

const UserProfile = ({foto, name, jabatan, onPress}) => {
  return (
    <Ripple onPress={onPress}>
      <View style={styles.containerProfile}>
        <Image source={foto} resizeMode="cover" style={styles.photoProfile} />
        <Spacer w={10} />
        <View style={styles.detailUser}>
          <Label text={name} size={18} />
          <Spacer h={2} />
          <Label text={jabatan} size={12} />
        </View>
        <Icon name="chevron-right" size={14} color={colors.secondary} />
      </View>
    </Ripple>
  );
};

export default React.memo(UserProfile);

const styles = StyleSheet.create({
  photoProfile: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 2,
    borderColor: 'red',
  },
  containerProfile: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },

  detailUser: {
    flex: 1,
  },
});
