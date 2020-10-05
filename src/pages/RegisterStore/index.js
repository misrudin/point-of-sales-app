import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Box, Input, Label, Spacer, Container, Button} from '../../components';
import {colors, useForm, getDetailUser} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import app from '../../configs';
import LottieView from 'lottie-react-native';
import {StoreAnimate} from '../../assets';

const RegisterStore = ({navigation}) => {
  const authstate = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const [pemilik, setPemilik] = useState('');
  const [form, setForm] = useForm({
    jenis_usaha: '',
    nama_toko: '',
    phone: '',
    provinsi: '',
    kota: '',
    alamat: '',
  });

  useEffect(() => {
    getDetailUser(authstate.uid).then((user) => {
      if (user) {
        setPemilik(user.name);
      }
    });
  }, [authstate.uid, setForm]);

  const _registerStore = async () => {
    dispatch({type: 'LOADING'});
    const databaseUrl = `stores/${authstate.uid}`;
    const data = {
      ...form,
      nama_pemilik: pemilik,
    };
    app
      .database()
      .ref(databaseUrl)
      .set(data)
      .then((res) => {
        dispatch({type: 'DONE'});
        dispatch({type: 'STORE', store: form});
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Box bg="rgb(18,134,255)" center>
          <Container>
            <View style={{height: 150}}>
              <LottieView source={StoreAnimate} autoPlay loop />
            </View>
            <Spacer h={20} />

            <Label text="Data Toko" weight="bold" color="#fff" size={18} />
            <Spacer h={5} />

            <Label text="Jenis Usaha" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Jenis Usaha"
              onChange={(e) => setForm('jenis_usaha', e)}
              value={form.jenis_usaha}
              icon="list"
            />

            <Spacer h={10} />

            <Label text="Nama Toko" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Nama Toko"
              onChange={(e) => setForm('nama_toko', e)}
              value={form.nama_toko}
              icon="store"
            />

            <Spacer h={10} />

            <Label text="Telephone" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Telephone"
              onChange={(e) => setForm('phone', e)}
              value={form.phone}
              phone
              icon="phone"
            />

            <Spacer h={20} />
            <Label text="Lokasi Toko" size={18} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Label text="Provinsi" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Provinsi"
              value={form.provinsi}
              onChange={(e) => setForm('provinsi', e)}
              icon="building"
            />

            <Spacer h={10} />
            <Label text="Kota" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Kota"
              value={form.kota}
              onChange={(e) => setForm('kota', e)}
              icon="university"
            />

            <Spacer h={10} />
            <Label text="Alamat" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Alamat"
              icon="map-marker-alt"
              value={form.alamat}
              onChange={(e) => setForm('alamat', e)}
            />

            <Spacer h={40} />
            <Button
              text="Daftar"
              color={colors.white}
              bg="#de4463"
              onPress={_registerStore}
            />
          </Container>
        </Box>
      </ScrollView>
    </View>
  );
};

export default RegisterStore;

const styles = StyleSheet.create({
  scroll: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'rgb(18,134,255)',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(18,134,255)',
  },
});
