import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacer, Label} from '../../atoms';
import Ripple from 'react-native-material-ripple';
import {colors} from '../../../utils';

const StoreProfile = ({name, jenis, onPress}) => {
  return (
    <Ripple onPress={onPress}>
      <View style={styles.containerProfile}>
        <View style={styles.detailUser}>
          <Label text={name} size={25} color={colors.error} />
          <Spacer h={2} />
          <Label text={jenis} size={12} />
        </View>
      </View>
    </Ripple>
  );
};

export default React.memo(StoreProfile);

const styles = StyleSheet.create({
  containerProfile: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  detailUser: {
    flex: 1,
  },
});
