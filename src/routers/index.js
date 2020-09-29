import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import {
  Main,
  Login,
  SplashScreen,
  Register,
  RegisterStore,
  Profile,
  Toko,
  Product,
  DataKaryawan,
  LaporanPenjualan,
  Pengaturan,
  AddProduct,
  AddKaryawan,
  EditStore,
  EditProduct,
  EditKaryawan,
  EditProfile,
  Stok,
  Print,
  Scan,
  Transaction,
} from '../pages';
import {Menu} from '../templates';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';

// membuat drawer navigation
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      minSwipeDistance={10}
      drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen name="Home" component={Main} />
    </Drawer.Navigator>
  );
};

// animasi untuk perpindahan layar
const forSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

// stack navigation
const MainStack = () => {
  const state = useSelector((value) => value.appState);
  const authstate = useSelector((value) => value.authState);

  console.log(authstate);

  if (state.splash) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={
        authstate.isLoggedIn
          ? authstate.userHaveStore
            ? 'MainMenu'
            : 'RegisterStore'
          : 'Login'
      }
      headerMode={false}>
      {!authstate.isLoggedIn ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{cardStyleInterpolator: forSlide}}
          />
        </>
      ) : !authstate.userHaveStore ? (
        <Stack.Screen
          name="RegisterStore"
          component={RegisterStore}
          options={{cardStyleInterpolator: forSlide}}
        />
      ) : (
        <>
          <Stack.Screen
            name="MainMenu"
            component={DrawerNavigation}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Toko"
            component={Toko}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="DataKaryawan"
            component={DataKaryawan}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="LaporanPenjualan"
            component={LaporanPenjualan}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Pengaturan"
            component={Pengaturan}
            options={{cardStyleInterpolator: forSlide}}
          />

          <Stack.Screen
            name="AddKaryawan"
            component={AddKaryawan}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="EditKaryawan"
            component={EditKaryawan}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="EditProduct"
            component={EditProduct}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="EditStore"
            component={EditStore}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Print"
            component={Print}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Stock"
            component={Stok}
            options={{cardStyleInterpolator: forSlide}}
          />
          <Stack.Screen
            name="Transaction"
            component={Transaction}
            options={{cardStyleInterpolator: forSlide}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
