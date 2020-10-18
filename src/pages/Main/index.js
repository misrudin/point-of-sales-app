import React from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Box, Label, MainMenu, Spacer, NewTransaction} from '../../components';
import {colors} from '../../utils';
import {HomeAnimate} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../templates';
import LottieView from 'lottie-react-native';

const {height} = Dimensions.get('window');
const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const MainApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Dashboard"
        header={HEADER_HEIGHT}
        bg={'#fff'}
      />
      <ScrollView
        contentContainerStyle={[styles.scroll, {paddingTop: HEADER_HEIGHT}]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}>
        {/* main menu */}
        <LinearGradient
          colors={['#1ED1FF', 'rgb(18,134,255)']}
          style={styles.header}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 1}}>
          <LottieView style={styles.lotie} source={HomeAnimate} autoPlay loop />
        </LinearGradient>
        <Spacer h={20} />
        <Box bg={colors.white}>
          <MainMenu navigation={navigation} />
          <Spacer h={100} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Transaction')}
            style={styles.buttonTransaksi}>
            <Label text="MULAI TRANSAKSI" weight="bold" color="#fff" />
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {
    height: height / 3,
    width: '100%',
    // backgroundColor: '#0278ae',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {backgroundColor: colors.white, flex: 1},
  lotie: {width: '100%', height: '100%'},

  buttonTransaksi: {
    backgroundColor: '#0278ae',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
});
