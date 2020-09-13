import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors} from '../../utils';

const HeaderTemplates = ({header}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.header}
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <View style={[styles.header, {height: header}]}>
        <Text>Header</Text>
      </View>
    </>
  );
};

export default HeaderTemplates;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50 + StatusBar.currentHeight,
    backgroundColor: colors.header,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
