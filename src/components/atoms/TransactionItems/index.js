import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Label, Spacer} from '../index';
import {Laptop} from '../../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';

const TransactionItem = ({data, onPress}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.viewContainer}>
      <View style={styles.dots}>
        <Image style={styles.image} source={Laptop} resizeMode="cover" />
      </View>
      <Spacer w={8} />
      <View style={styles.detail}>
        <Label text={data.nama} weight="bold" />
        <Spacer f={1} />
        <View style={styles.footer}>
          <View style={styles.price}>
            <Label text={'Stok : ' + data.stok} size={10} />
            <Label text={'Rp. ' + data.harga} />
          </View>
          <Spacer f={1} />
          <View style={styles.qty}>
            <TouchableOpacity
              onPress={() => dispatch({type: 'MIN_QTY', kode: data.kode})}
              style={styles.button}>
              <Icon name="minus" color="#fff" size={10} />
            </TouchableOpacity>
            <View style={styles.value}>
              <Label text={data.qty} weight="bold" color="#08B3E5" />
            </View>
            <TouchableOpacity
              onPress={() => dispatch({type: 'ADD_QTY', kode: data.kode})}
              style={styles.button}>
              <Icon name="plus" color="#fff" size={10} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(TransactionItem);

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 1,

    // elevation: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    height: 70,
    overflow: 'hidden',
  },
  dots: {
    width: 80,
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detail: {
    // backgroundColor: 'red',
    flex: 1,
    height: '100%',
    paddingVertical: 4,
    paddingRight: 10,
  },

  footer: {
    flexDirection: 'row',
  },
  qty: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#08B3E5',
    width: 25,
    height: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  value: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
