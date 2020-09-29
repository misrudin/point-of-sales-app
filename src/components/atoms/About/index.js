import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacer, Label} from '../../atoms';
import {colors} from '../../../utils';

const AboutApp = () => {
  return (
    <View style={styles.containerProfile}>
      <View style={styles.detailUser}>
        <Label text="Dagang" size={25} color={colors.error} />
        <Spacer h={2} />
        <Label text="Versi 1.0.0" size={12} />
      </View>
    </View>
  );
};

export default React.memo(AboutApp);

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
