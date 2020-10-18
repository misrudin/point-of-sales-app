import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button, Input, Label, Spacer} from '../../atoms';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors, useForm} from '../../../utils';
import {useSelector, useDispatch} from 'react-redux';
import app from '../../../configs';
import {Box} from '../../molechules';

const TambahPelanggan = ({show = false, onclose, mode = '', data = null}) => {
  const userState = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    nama: data?.nama,
    kode: data?.kode || '',
    alamat: data?.alamat || '',
    kontak: data?.kontak || '',
  });

  useEffect(() => {
    setForm('reset');
    if (data) {
      setForm('kode', data.kode);
      setForm('nama', data.nama);
      setForm('alamat', data.alamat);
      setForm('kontak', data.kontak);
    }

    return setForm('reset');
  }, [data]);

  useEffect(() => {
    if (mode && mode === 'add') {
      const kode = `${new Date().getTime()}`;
      setForm('reset');
      setForm('kode', kode);
    }
  }, [mode]);

  const addPelanggan = () => {
    dispatch({type: 'LOADING'});
    const urlFirebase = `customers/${userState.uid}/${form.kode}`;
    app
      .database()
      .ref(urlFirebase)
      .set(form)
      .then(() => {
        dispatch({type: 'DONE'});
        onclose();
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
      });
  };

  const editPelanggan = () => {
    dispatch({type: 'LOADING'});
    const urlFirebase = `customers/${userState.uid}/${form.kode}`;
    app
      .database()
      .ref(urlFirebase)
      .update(form)
      .then(() => {
        dispatch({type: 'DONE'});
        onclose();
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
      });
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      visible={show}
      onRequestClose={onclose}>
      <StatusBar
        animated
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0278ae"
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.modalHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => onclose()}>
            <Icon name="arrow-left" color={colors.white} size={18} />
          </TouchableOpacity>
        </View>
        <Spacer w={10} />
        <View style={styles.headerCenter}>
          <Label
            color="#fff"
            weight="bold"
            text={mode === 'add' ? 'Tambah Pelanggan' : 'Edit Data Pelanggan'}
          />
        </View>
        <Spacer w={10} />
        <View style={styles.heaerRight} />
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.scroll]}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}>
          <Box bg={colors.white} padding={12}>
            <Label text="Kode" weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Kode pelanggan"
              value={form.kode}
              onChange={(e) => setForm('kode', e)}
            />

            <Spacer h={10} />

            <Label text="Nama" weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Nama"
              value={form.nama}
              onChange={(e) => setForm('nama', e)}
            />

            <Spacer h={10} />

            <Label text="Alamat" weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Alamat"
              value={form.alamat}
              onChange={(e) => setForm('alamat', e)}
            />

            <Spacer h={10} />

            <Label text="Kontak" weight="bold" />
            <Spacer h={5} />
            <Input
              placeholder="Kontak"
              value={form.kontak}
              onChange={(e) => setForm('kontak', e)}
            />

            <Spacer h={40} />
            <View style={styles.containerButton}>
              <Button
                text="Simpan"
                onPress={mode === 'add' ? addPelanggan : editPelanggan}
                color={colors.white}
                bg="blue"
              />
            </View>
          </Box>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default TambahPelanggan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modalHeader: {
    backgroundColor: '#0278ae',
    // height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },

  headerCenter: {
    flex: 1,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },

  scroll: {
    paddingBottom: 20,
    paddingTop: 10,
  },

  containerButton: {
    width: '100%',
  },
});
