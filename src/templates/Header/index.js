import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Label} from '../../components';
import {colors} from '../../utils';

const Header = ({
  navigation,
  text,
  header,
  back,
  noshadow = false,
  bg = '#fff',
  edit,
  add,
  onBack,
}) => {
  return (
    <View style={[styles.container(noshadow, bg), {height: header}]}>
      <StatusBar
        animated
        barStyle="dark-content"
        hidden={false}
        backgroundColor={bg}
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.3}
          onPress={() =>
            back ? navigation.goBack() : onBack ? onBack() : null
          }>
          {back && (
            <Icon name={back && 'arrow-left'} color={colors.dark1} size={18} />
          )}
          {onBack && (
            <Icon
              name={onBack && 'arrow-left'}
              color={colors.dark1}
              size={18}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Label text={text} size={18} weight="bold" color="#000" />
      </View>
      <View style={styles.right}>
        {edit && (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={edit}>
            <Icon name={'pen'} color={colors.dark1} size={18} />
          </TouchableOpacity>
        )}
        {add && (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={add}>
            <Icon name="plus" color={colors.dark1} size={18} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (noshadow, bg) => {
    return {
      flexDirection: 'row',
      height: 50 + StatusBar.currentHeight,
      backgroundColor: bg,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: StatusBar.currentHeight,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: noshadow ? 0 : 1,
      shadowRadius: noshadow ? 0 : 1,
      elevation: noshadow ? 0 : 2,
      zIndex: 1000,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    };
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
  right: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
