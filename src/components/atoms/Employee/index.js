import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Spacer, Label} from '../index';
import {Laptop} from '../../../assets';

const Employee = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Laptop} resizeMode="cover" style={styles.image} />
      </View>
    </View>
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
