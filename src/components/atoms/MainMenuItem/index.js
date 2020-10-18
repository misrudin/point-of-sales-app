import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {Label, Spacer} from '../index';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {width} = Dimensions.get('window');

const MainMenuItem = ({data, navigation, index}) => {
  return (
    <>
      <View style={styles.viewContainer(index)}>
        <TouchableOpacity
          onPress={() => navigation.navigate(data.link)}
          style={styles.constinerItemMenu}>
          <Icon
            name={data.icon}
            color={
              index === 0 || index === 7
                ? '#1AA5FF'
                : index === 1 || index === 6
                ? '#FF6C81'
                : index === 2 || index === 5
                ? '#08B3E5'
                : (index === 3 || index === 4) && '#0278ae'
            }
            size={25}
          />
          <Spacer h={10} w={10} />
          <Label text={data.name} weight="bold" color="#0f3057" size={12} />
        </TouchableOpacity>
      </View>
      {(index !== 3 || index !== 7) && <Spacer h={10} w={10} />}
    </>
  );
};

export default React.memo(MainMenuItem);

const styles = StyleSheet.create({
  constinerItemMenu: {
    width: '100%',
    height: (width - 54) / 4,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  viewContainer: (index) => {
    return {
      width: (width - 54) / 4,
      marginBottom: 10,
    };
  },
});
