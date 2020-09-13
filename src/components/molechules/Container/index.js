import React from 'react';
import {StyleSheet, View} from 'react-native';

const ContainerComponent = ({children, bg}) => {
  return <View style={styles.container(bg)}>{children}</View>;
};

export default ContainerComponent;

const styles = StyleSheet.create({
  container: (bg) => {
    return {
      backgroundColor: bg,
      width: '100%',
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 10,
    };
  },
});
