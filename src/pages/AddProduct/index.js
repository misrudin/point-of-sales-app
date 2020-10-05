import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, StatusBar, View, Image} from 'react-native';
import {Box, Button, Container, Input, Label, Spacer} from '../../components';
import {Header} from '../../templates';
import {colors, useForm} from '../../utils';
import app from '../../configs';
import {useDispatch, useSelector} from 'react-redux';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const AddProduct = ({navigation, route}) => {
  const data = route.params?.data;
  const [form, setForm] = useForm({
    nama: data?.nama,
    harga: data?.harga,
    stok: data?.stok,
    detail: data?.detail,
    kode: data?.kode,
  });

  const mode = route.params.mode;

  const userState = useSelector((state) => state.authState);

  const dispatch = useDispatch();

  // const [kodeOtomatis, setKodeOtomatis] = useState(data?.kode);

  useEffect(() => {
    if (mode && mode === 'add') {
      const kode = `${new Date().getTime()}`;
      setForm('kode', kode);
    }
  }, [mode]);

  const _onAddProduct = () => {
    dispatch({type: 'LOADING'});
    const urlFirebase = `products/${userState.uid}/${form.kode}`;
    app
      .database()
      .ref(urlFirebase)
      .set(form)
      .then(() => {
        dispatch({type: 'DONE'});
        navigation.goBack();
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
      });
  };

  const _onEditProduct = () => {
    dispatch({type: 'LOADING'});
    const urlFirebase = `products/${userState.uid}/${form.kode}`;
    app
      .database()
      .ref(urlFirebase)
      .update(form)
      .then(() => {
        dispatch({type: 'DONE'});
        navigation.goBack();
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
      });
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text={mode === 'add' ? 'Tambah Produk' : 'Edit Produk'}
        header={HEADER_HEIGHT}
        back
      />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {paddingTop: HEADER_HEIGHT + 10},
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}>
        <Box bg={colors.white} center>
          <Container>
            <View style={styles.inputImage}>
              <Image />
            </View>

            <Label text="Kode" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Kode"
              icon="list"
              onChange={(e) => setForm('kode', e)}
              value={form.kode}
            />

            <Spacer h={10} />
            <Label text="Nama" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Nama"
              icon="list"
              value={form.nama}
              onChange={(e) => setForm('nama', e)}
            />

            <Spacer h={10} />

            <Label text="Harga" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Rp."
              icon="store"
              value={form.harga}
              onChange={(e) => setForm('harga', e)}
            />

            <Spacer h={10} />

            <Label text="Stok Awal" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="0"
              phone
              icon="phone"
              value={form.stok}
              onChange={(e) => setForm('stok', e)}
            />

            <Spacer h={10} />

            <Label text="Detail" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Detail"
              icon="list"
              value={form.detail}
              onChange={(e) => setForm('detail', e)}
            />

            <Spacer h={40} />
            <Button
              text="Simpan"
              color={colors.white}
              bg="blue"
              onPress={mode === 'add' ? _onAddProduct : _onEditProduct}
            />
          </Container>
        </Box>
      </ScrollView>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {elevation: 2, zIndex: 2000},
  container: {backgroundColor: colors.white, flex: 1},

  inputImage: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});
