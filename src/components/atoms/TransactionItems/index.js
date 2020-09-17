import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Label} from '..';

const TransactionItem = ({data}) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.dots} />
      <Label text={data.name} />
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
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
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 10 / 2,
    borderWidth: 1,
    marginRight: 10,
    borderColor: 'gray',
  },
});
