import React from 'react';
import {Employee} from '../../atoms';
import {View, StyleSheet} from 'react-native';

const Employees = ({data, onPress}) => {
  return (
    <View style={styles.container}>
      {data?.map((item, i) => {
        return <Employee key={i} data={item} onPress={() => onPress(item)} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default React.memo(Employees);
