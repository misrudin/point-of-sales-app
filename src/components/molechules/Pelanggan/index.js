import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Label, Spacer} from '../../atoms';
import {Laptop} from '../../../assets';

const Pelanggan = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
      <Image source={Laptop} style={styles.image} />
      <Spacer w={10} />
      <View style={styles.detail}>
        <Label text={data.nama} weight="bold" size={16} color="#000" />
        <Label text={data.alamat} size={16} color="#000" />
        <Label text={data.kontak} size={12} color="#000" />
      </View>
    </TouchableOpacity>
  );
};

export default Pelanggan;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 4,
    marginBottom: 10,
  },

  detail: {
    paddingVertical: 10,
    paddingRight: 10,
  },
});
