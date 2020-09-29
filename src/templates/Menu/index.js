import React from 'react';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  UserProfile,
  Divider,
  Spacer,
  StoreProfile,
  MenuItem,
  About,
} from '../../components';
import {logOut} from '../../utils';
import {useDispatch} from 'react-redux';

const MenuCustom = ({navigation, progress, ...rest}) => {
  const dispatch = useDispatch();
  const foto =
    'data:image/jpeg;base64,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';

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-1000, 0],
  });

  const otw = (tujuan) => {
    navigation.navigate(tujuan);
    navigation.closeDrawer();
  };

  const _logout = () => {
    // logout func
    dispatch({type: 'LOGOUT'});
    logOut();
  };

  return (
    <Animated.View style={{transform: [{translateX}]}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.minimumHeight}>
        <View style={styles.container}>
          <UserProfile
            foto={{uri: foto}}
            name="Current User"
            jabatan="Pemilik"
            onPress={() => otw('Profile')}
          />
          <Divider />
          <StoreProfile
            name="Shopie"
            jenis="Butik"
            onPress={() => otw('Toko')}
          />
          <Divider />
          <Spacer h={20} />
          <MenuItem
            icon="home"
            text="Beranda"
            onPress={() => otw('MainMenu')}
          />
          <MenuItem
            icon="list"
            text="Product List"
            onPress={() => otw('Product')}
          />
          <MenuItem
            icon="users"
            text="Data Karyawan"
            onPress={() => otw('DataKaryawan')}
          />
          <MenuItem
            icon="history"
            text="Laporan Penjualan"
            onPress={() => otw('LaporanPenjualan')}
          />
          <MenuItem
            icon="cog"
            text="Pengaturan"
            onPress={() => otw('Pengaturan')}
          />
          <MenuItem icon="power-off" text="Logout" onPress={() => _logout()} />
          <View style={styles.flexFull} />
          <About />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default MenuCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  flexFull: {
    flex: 1,
  },

  minimumHeight: {minHeight: '100%'},
});
