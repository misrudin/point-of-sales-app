import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Label} from '..';
import Ripple from 'react-native-material-ripple';
import {Laptop} from '../../../assets';

const TransactionItem = ({data, onPress}) => {
  return (
    <Ripple onPress={onPress && onPress} style={styles.viewContainer}>
      <View style={styles.dots}>
        <Image style={styles.image} source={Laptop} resizeMode="cover" />
      </View>
      <Label text={data.name} />
    </Ripple>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
    backgroundColor: '#fff',
    height: 70,
  },
  dots: {
    width: 80,
    height: '100%',
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
