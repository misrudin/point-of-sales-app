import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {TransactionItems} from '../../atoms';

const NewTransaction = ({data}) => {
  return (
    <View style={styles.containerView}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <TransactionItems data={item} index={index} />
        )}
        keyExtractor={(_, index) => index.toString()}
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
