import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Spacer, Label} from '../index';
import {Laptop} from '../../../assets';
import {Row} from '../../molechules';

const ProductItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Laptop} resizeMode="cover" style={styles.image} />
      </View>
      <Spacer w={20} h={20} />
      <View style={styles.f1}>
        <Label text="Laptop Dummy image from internet" size={18} color="#000" />
        <Spacer h={5} />
        <View style={styles.f1}>
          <Label text="Dibuat dari bahan terkemuka dan terpercaya" />
        </View>
        <Spacer h={7} />
        <Row justify="flex-start">
          <Label text="Sisa Stok : 10" />
          <Spacer h={5} w={30} />
          <Label text="Rp. 100K" color="salmon" />
        </Row>
      </View>
    </View>
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
  },
  imageContainer: {
    width: 130,
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%'},
  f1: {flex: 1},
});
