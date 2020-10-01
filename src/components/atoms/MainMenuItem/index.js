import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Label} from '../index';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainMenuItem = ({data, navigation, index}) => {
  return (
    <View style={styles.viewContainer(index)}>
      <LinearGradient
        colors={['#1ED1FF', '#rgb(18,134,255)']}
        style={styles.constinerItemMenu}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Ripple
          // onPress={() => navigation.navigate(data.link)}
          style={styles.buttonRipple}>
          <Icon name="server" color="#fff" size={22} />
          <Label text={data.name} weight="bold" color="#fff" size={16} />
        </Ripple>
      </LinearGradient>
    </View>
  );
};

export default React.memo(MainMenuItem);

const styles = StyleSheet.create({
  constinerItemMenu: {
    width: '100%',
    height: 120,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  viewContainer: (index) => {
    return {
      width: '50%',
      marginBottom: 10,
      paddingRight: index % 2 === 0 ? 5 : 0,
      paddingLeft: index % 2 === 0 ? 0 : 5,
    };
  },
  buttonRipple: {
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
