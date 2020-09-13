import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Label} from '../../components';
import {colors} from '../../utils';

const Header = ({navigation, text, header, back}) => {
  return (
    <View style={[styles.container, {height: header}]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.3}
          onPress={() =>
            back ? navigation.goBack() : navigation.openDrawer()
          }>
          <Icon
            name={back ? 'arrow-left' : 'bars'}
            color={colors.dark1}
            size={18}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Label text={text} size={18} />
      </View>
      <View style={styles.right} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50 + StatusBar.currentHeight,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  Icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  title: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  left: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  right: {flex: 1},
});
