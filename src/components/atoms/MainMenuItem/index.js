import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Label} from '../index';
import Ripple from 'react-native-material-ripple';

const MainMenuItem = ({data, navigation, index}) => {
  return (
    <View style={styles.viewContainer(index)}>
      <Ripple
        // onPress={() => navigation.navigate(data.link)}
        style={styles.constinerItemMenu}>
        <Label text={data.name} />
      </Ripple>
    </View>
  );
};

export default MainMenuItem;

const styles = StyleSheet.create({
  constinerItemMenu: {
    backgroundColor: '#fff',
    width: '100%',
    height: 120,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: (index) => {
    return {
      width: '50%',
      marginBottom: 10,
      paddingRight: index % 2 === 0 ? 5 : 0,
      paddingLeft: index % 2 === 0 ? 0 : 5,
    };
  },
});
