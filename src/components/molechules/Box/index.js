import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../../../utils';

const BoxcomponentContainer = ({children, center, padding = 12}) => {
  return (
    <SafeAreaView style={styles.container(center, padding)}>
      {children}
    </SafeAreaView>
  );
};

export default React.memo(BoxcomponentContainer);

const styles = StyleSheet.create({
  container: (center, padding) => {
    return {
      flex: 1,
      paddingHorizontal: padding,
      backgroundColor: colors.background,
      justifyContent: center ? 'center' : 'flex-start',
      alignItems: center ? 'center' : 'flex-start',
    };
  },
});
