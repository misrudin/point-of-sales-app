import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, StatusBar, View, Image} from 'react-native';
import {Box, Label, Spacer} from '../../components';
import {Header} from '../../templates';
import {colors, getDetailStore, getDetailUser} from '../../utils';
import {Laptop} from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const Profile = ({navigation}) => {
  const authState = useSelector((state) => state.authState);

  const [user, setUser] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(() => {
    getDetailUser(authState.uid).then((res) => {
      setUser(res);
    });
    getDetailStore(authState.uid).then((dataStore) => {
      setStore(dataStore);
      console.log(dataStore);
    });
  }, [authState.uid]);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="My Profile"
        header={HEADER_HEIGHT}
        bg={'#fff'}
        edit={() => null}
      />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {paddingTop: HEADER_HEIGHT + 10},
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}>
        <Box padding={20} bg={colors.white}>
          {/* user profile */}
          <View style={styles.containerProfile}>
            <View style={styles.containerFoto}>
              <Image source={Laptop} style={styles.foto} />
              <View style={styles.status} />
            </View>
            <View style={styles.userDetail}>
              <Label text={user?.name} color="#000" size={22} weight="bold" />
              <Label
                text={
                  user?.store === true
                    ? 'Pemilik Toko ' + store?.nama_toko
                    : 'Karyawan di ' + store?.nama_toko
                }
                color="#777"
                size={14}
              />
              <Spacer f={1} />
              <View style={styles.locationUser}>
                <Icon name="map-marker-alt" size={14} color="salmon" />
                <Spacer h={5} w={5} />
                <Label
                  text={store?.alamat}
                  color="#000"
                  size={12}
                  weight="bold"
                />
              </View>
            </View>
          </View>

          <Spacer h={30} />
          {/* user daily  */}
          <View style={styles.countDaily}>
            <View style={styles.dailyLeft}>
              <Label text="Daily Load : " weight="bold" />
              <Label text="100%" weight="bold" color="#B858C1" />
            </View>
            <View style={styles.dailyRight}>
              <Label text="User : " weight="bold" />
              <Label text="10" color="#FC826E" weight="bold" />
            </View>
          </View>
          <Spacer h={20} />
          <View style={styles.daily}>
            <View style={styles.bodyDaily}>
              <Label text="Lorem" />
            </View>
            <View style={styles.footerDaily}>
              <Icon name="comments" color="#1AA5FF" size={22} />
              <Spacer f={1} />
              <Icon name="server" color="#FF6C81" size={22} />
              <Spacer f={1} />
              <Icon name="history" color="#08B3E5" size={22} />
              <Spacer f={1} />
              <Icon name="list" color="#A3C3FB" size={22} />
            </View>
          </View>
        </Box>
        {/* horizontall scroll */}
        <Spacer h={25} />
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalScroll}
          showsHorizontalScrollIndicator={false}>
          <LinearGradient
            colors={['#9F2CFA', '#590CFA']}
            style={styles.itemHorizontal}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Icon name="user-plus" color="#eee" size={20} />
            <Spacer h={10} />
            <Label text="1000" weight="bold" size={18} color="#fff" />
            <Label text="Followers" size={14} color="#eee" />
          </LinearGradient>
          <Spacer w={10} />
          <LinearGradient
            colors={['#FFA480', '#FF5C80']}
            style={styles.itemHorizontal}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Icon name="user-plus" color="#eee" size={20} />
            <Spacer h={10} />
            <Label text="1000" weight="bold" size={18} color="#fff" />
            <Label text="Followers" size={14} color="#eee" />
          </LinearGradient>
          <Spacer w={10} />
          <LinearGradient
            colors={['#1ED1FF', '#rgb(18,134,255)']}
            style={styles.itemHorizontal}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Icon name="user-plus" color="#eee" size={20} />
            <Spacer h={10} />
            <Label text="1000" weight="bold" size={18} color="#fff" />
            <Label text="Followers" size={14} color="#eee" />
          </LinearGradient>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {elevation: 2, zIndex: 2000},
  container: {backgroundColor: colors.white, flex: 1},

  // style
  containerProfile: {
    flexDirection: 'row',
  },
  containerFoto: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    borderWidth: 2,
    borderColor: '#fff',
  },
  foto: {
    width: '100%',
    height: '100%',
    borderRadius: 100 / 2,
  },

  userDetail: {
    marginLeft: 15,
    paddingVertical: 10,
    flex: 1,
  },

  locationUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  status: {
    width: 15,
    height: 15,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: -7,
    alignSelf: 'center',
    borderRadius: 15 / 2,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  // daily
  daily: {
    width: '100%',
    borderRadius: 6,
    height: 250,
    backgroundColor: '#fff',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },

  countDaily: {
    flexDirection: 'row',
  },

  dailyLeft: {
    flex: 1,
    flexDirection: 'row',
  },

  dailyRight: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  bodyDaily: {
    flex: 1,
    padding: 10,
  },

  footerDaily: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  // horizontall
  itemHorizontal: {
    width: 150,
    height: 150,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalScroll: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
