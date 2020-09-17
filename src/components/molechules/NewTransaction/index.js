import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {TransactionItems} from '../../atoms';
import {dataDummy} from '../../../assets';

const NewTransaction = () => {
  return (
    <View style={styles.containerView}>
      <FlatList
        data={dataDummy}
        renderItem={({item, index}) => (
          <TransactionItems data={item} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NewTransaction;

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
  },
});
