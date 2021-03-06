import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {MainMenuItem} from '../../atoms';
import {dataMenuHome} from '../../../assets';

const MainMenu = ({navigation}) => {
  return (
    <View style={styles.containerMenu}>
      <FlatList
        data={dataMenuHome}
        renderItem={({item, index}) => (
          <MainMenuItem
            data={item}
            key={index}
            navigation={navigation}
            index={index}
          />
        )}
        numColumns={4}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default React.memo(MainMenu);

const styles = StyleSheet.create({
  containerMenu: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
});
