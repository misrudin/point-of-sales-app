import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Spacer, Label} from '../index';
import {Laptop} from '../../../assets';
import {Row} from '../../molechules';
import Ripple from 'react-native-material-ripple';

const ProductItem = ({item, onPress}) => {
  return (
    <Ripple style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={Laptop} resizeMode="cover" style={styles.image} />
      </View>
      <Spacer w={20} h={20} />
      <View style={styles.f1}>
        <Label text={item.nama} size={18} color="#000" weight="bold" />
        <Spacer h={5} />
        <View style={styles.f1}>
          <Label text={item.detail} />
        </View>
        <Spacer h={7} />
        <Row justify="flex-start">
          <Label text={`Sisa Stok : ${item.stok}`} />
          <Spacer h={5} w={30} />
          <Label text={`Rp. ${item.harga}`} color="salmon" />
        </Row>
      </View>
    </Ripple>
  );
};

export default React.memo(ProductItem);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 130,
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%'},
  f1: {flex: 1},
});
