import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, StatusBar, View, Image} from 'react-native';
import {Box, Button, Container, Input, Label, Spacer} from '../../components';
import {Header} from '../../templates';
import {colors, useForm} from '../../utils';
import app from '../../configs';
import {useDispatch, useSelector} from 'react-redux';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const AddKaryawan = ({navigation, route}) => {
  const data = route.params?.data;
  const [form, setForm] = useForm({
    nama: data?.nama,
    alamat: data?.alamat,
    email: data?.email,
    password: data?.password,
    kode: data?.kode,
  });

  const userState = useSelector((state) => state.authState);

  const dispatch = useDispatch();

  const mode = route.params.mode;

  useEffect(() => {
    if (mode && mode === 'add') {
      const kode = `${new Date().getTime()}`;
      setForm('kode', kode);
    }
  }, [mode]);

  const _onAddKaryawan = () => {
    dispatch({type: 'LOADING'});
    const urlFirebase = `employees/${userState.uid}/${form.kode}`;
    app
      .database()
      .ref(urlFirebase)
      .set(form)
      .then(() => {
        dispatch({type: 'DONE'});
        navigation.goBack();
      })
      .catch((e) => {
        console.log(e);
        dispatch({type: 'DONE'});
      });
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Tambah Karyawan"
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

            <Label text="Alamat" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Alamat"
              icon="store"
              value={form.alamat}
              onChange={(e) => setForm('alamat', e)}
            />

            <Spacer h={10} />

            <Label text="Email" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Email"
              icon="store"
              value={form.email}
              onChange={(e) => setForm('email', e)}
            />

            <Spacer h={10} />

            <Label text="Password" size={14} weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Password"
              icon="store"
              value={form.password}
              onChange={(e) => setForm('password', e)}
            />

            <Spacer h={40} />
            <Button
              text="Simpan"
              color={colors.white}
              bg="blue"
              onPress={_onAddKaryawan}
            />
          </Container>
        </Box>
      </ScrollView>
    </View>
  );
};

export default AddKaryawan;

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
