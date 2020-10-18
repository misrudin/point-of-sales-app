import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Spacer, Label} from '../index';
import {Laptop} from '../../../assets';
import {Row} from '../../molechules';

const ItemSearch = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={Laptop} resizeMode="cover" style={styles.image} />
      </View>
      <Spacer w={10} h={10} />
      <View style={styles.f1}>
        <Label text={item.nama} size={18} color="#000" weight="bold" />
        <Spacer f={1} />
        <Row justify="flex-start">
          <Label text={`Sisa Stok : ${item.stok}`} />
          <Spacer h={5} w={30} />
          <Label text={`Rp. ${item.harga}`} color="salmon" />
        </Row>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ItemSearch);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 70,
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%'},
  f1: {flex: 1},
});
