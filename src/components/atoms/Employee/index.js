import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Spacer, Label} from '../index';
import {Laptop} from '../../../assets';

const Employee = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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

export default React.memo(Employee);

const styles = StyleSheet.create({
  container: {
    width: '50%',
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
});
