import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Box,
  Label,
  Spacer,
  Input,
  Modal,
  NewTransaction,
  PilihPelanggan,
} from '../../components';
import {colors} from '../../utils';
import {Header} from '../../templates';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';

import app from '../../configs';

const {width, height} = Dimensions.get('window');
const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const MainApp = ({navigation}) => {
  const dataTransaksi = useSelector((state) => state.transactionState);
  const userState = useSelector((state) => state.authState);
  const [showModal, setShowModal] = useState(false);
  const [pilihPelanggan, setPilihPelanggan] = useState(false);
  const [waktu, setWaktu] = useState('');
  const [kode, setKode] = useState('');
  const dispatch = useDispatch();

  const handleCancel = () => {
    if (dataTransaksi.data.length > 0) {
      Alert.alert(
        'Konfirmasi',
        'Anda yakin akan keluar dan membatalkan transaksi ?',
        [
          {
            text: 'Batal',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Keluar',
            onPress: () => {
              dispatch({type: 'CANCEL_TRANSACTION'});
              navigation.goBack();
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const tanggal = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    const jam = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    setWaktu(`${tanggal}, ${jam}`);

    const kodeTransaksi = `${new Date().getTime()}`;

    setKode(kodeTransaksi);
  }, []);

  const alertCheckout = () => {
    Alert.alert(
      'Konfirmasi',
      'Lanjutkan ke pembayaran ?',
      [
        {
          text: 'Batal',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Lanjutkan',
          onPress: () => {
            checkout();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const checkout = async () => {
    const tanggal = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    const urlFirebase = `transactions/${userState.uid}/${tanggal}/${kode}`;

    //buat data transaksi

    const data = {
      kode: kode,
      waktu: waktu,
      pelanggan: dataTransaksi.pelanggan,
      data: dataTransaksi.data,
    };

    dispatch({type: 'LOADING'});
    app
      .database()
      .ref(urlFirebase)
      .set(data)
      .then(() => {
        dispatch({type: 'DONE'});
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
      });

    //kurangi stok produk

    for (const item of dataTransaksi.data) {
      kurangiStok(item.stok, item.kode, item.qty);
    }
  };

  const kurangiStok = (stokAwal, kodeProduk, qty) => {
    const urlFirebase = `products/${userState.uid}/${kodeProduk}`;
    const stok = parseInt(stokAwal, 10) - parseInt(qty, 10);
    const data = {
      stok: stok,
    };
    dispatch({type: 'LOADING'});
    app
      .database()
      .ref(urlFirebase)
      .update(data)
      .then(() => {
        dispatch({type: 'DONE'});
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
      });
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Transaksi"
        header={HEADER_HEIGHT}
        bg={'#fff'}
        onBack={handleCancel}
      />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {paddingTop: HEADER_HEIGHT + 10},
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}>
        <Box bg={colors.white}>
          <Label
            text="Tanggal Dan Waktu"
            size={14}
            weight="bold"
            color="#000"
          />
          <Spacer h={5} />
          <Input
            placeholder="Tanggal Dan Waktu"
            value={waktu}
            icon="calendar"
          />

          <Spacer h={10} />

          <Label text="Pelanggan" size={14} weight="bold" color="#000" />
          <Spacer h={5} />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Input
                placeholder="Pelanggan"
                value={dataTransaksi.pelanggan}
                icon="calendar"
              />
            </View>
            <Spacer h={10} w={10} />
            <TouchableOpacity
              onPress={() => setPilihPelanggan(true)}
              style={styles.buttonPilihPelanggan}>
              <Label text="PILIH" color="#fff" weight="bold" />
            </TouchableOpacity>
          </View>

          <Spacer h={10} />

          <Label text="Kode Transaksi" size={14} weight="bold" color="#000" />
          <Spacer h={5} />
          <Input placeholder="Tanggal Dan Waktu" value={kode} icon="calendar" />

          {dataTransaksi.data.length > 0 && (
            <>
              <Spacer h={20} />
              <NewTransaction data={dataTransaksi.data} />
            </>
          )}

          <Spacer h={20} />
          <View style={styles.addTransaction}>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => setShowModal(true)}>
              <Label
                text="TAMBAH ITEM"
                weight="bold"
                size={16}
                center
                color="#0278ae"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonScan} onPress={null}>
              <Icon name="qrcode" size={22} color="#fff" />
              <Label text="SCAN" weight="bold" size={16} center color="#fff" />
            </TouchableOpacity>
          </View>
        </Box>
      </ScrollView>
      {dataTransaksi.data.length > 0 && (
        <View style={styles.checkoutContainer}>
          <View style={styles.total}>
            <Label
              text="Rp. 50.0000"
              weight="bold"
              size={20}
              center
              color="#fff"
            />
          </View>
          <Spacer f={1} />
          <TouchableOpacity
            onPress={alertCheckout}
            style={styles.buttonCheckout}>
            <Label
              text="CHECKOUT"
              weight="bold"
              size={16}
              center
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
      <Modal show={showModal} onclose={() => setShowModal(false)} />
      <PilihPelanggan
        show={pilihPelanggan}
        onclose={() => setPilihPelanggan(false)}
      />
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
    width: width,
    backgroundColor: '#0278ae',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {backgroundColor: colors.white, flex: 1},
  addTransaction: {
    flexDirection: 'row',
    height: 60,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },

  buttonAdd: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  buttonScan: {
    backgroundColor: '#0278ae',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkoutContainer: {
    backgroundColor: '#0278ae',
    height: 80,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  buttonCheckout: {
    backgroundColor: '#08B3E5',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
    borderRadius: 2,
  },

  buttonPilihPelanggan: {
    backgroundColor: '#0278ae',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 5,
  },
});
