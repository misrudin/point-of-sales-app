import React from 'react';
import {StyleSheet, View} from 'react-native';

const ContainerComponent = ({children, bg, justify = 'center'}) => {
  return <View style={styles.container(bg, justify)}>{children}</View>;
};

export default ContainerComponent;

const styles = StyleSheet.create({
  container: (bg, justify) => {
    return {
      backgroundColor: bg,
      width: '100%',
      flexDirection: 'row',
      justifyContent: justify,
      alignItems: 'center',
    };
  },
});
