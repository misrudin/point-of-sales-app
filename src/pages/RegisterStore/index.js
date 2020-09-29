import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Box,
  Input,
  Label,
  Spacer,
  Container,
  Button,
  Picker,
} from '../../components';
import {colors, useForm, getDetailUser} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import app from '../../configs';

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
        dispatch({type: 'STORE', store: form});
      });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <Box center>
        <Container>
          <Spacer h={50} />
          <Label text="Daftarkan Toko Kamu" center size={30} />
          <Spacer h={50} />

          <Label text="Data Toko" size={18} />
          <Spacer h={5} />

          <Label text="Jenis Usaha" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Jenis Usaha"
            onChange={(e) => setForm('jenis_usaha', e)}
            value={form.jenis_usaha}
            icon="list"
          />

          <Spacer h={10} />

          <Label text="Nama Toko" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Nama Toko"
            onChange={(e) => setForm('nama_toko', e)}
            value={form.nama_toko}
            icon="store"
          />

          <Spacer h={10} />

          <Label text="Telephone" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Telephone"
            onChange={(e) => setForm('phone', e)}
            value={form.phone}
            phone
            icon="phone"
          />

          <Spacer h={20} />
          <Label text="Lokasi Toko" size={18} />
          <Spacer h={5} />
          <Label text="Provinsi" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Provinsi"
            value={form.provinsi}
            onChange={(e) => setForm('provinsi', e)}
            icon="building"
          />

          <Spacer h={10} />
          <Label text="Kota" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Kota"
            value={form.kota}
            onChange={(e) => setForm('kota', e)}
            icon="university"
          />

          <Spacer h={10} />
          <Label text="Alamat" size={14} />
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
            bg="blue"
            onPress={_registerStore}
          />
        </Container>
      </Box>
    </ScrollView>
  );
};

export default RegisterStore;

const styles = StyleSheet.create({
  scroll: {minHeight: '100%'},
});
