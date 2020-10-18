import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, ScrollView, View, StatusBar} from 'react-native';
import {Box, TambahPelanggan, Pelanggan} from '../../components';
import {Header} from '../../templates';
import {colors} from '../../utils';

import {useSelector, useDispatch} from 'react-redux';
import app from '../../configs';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const ListPelanggan = ({navigation}) => {
  const [modalTambah, setModalTambah] = useState(false);

  const userState = useSelector((state) => state.authState);
  const [pelanggan, setPelanggan] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [mode, setMode] = useState('add');
  const dispatch = useDispatch();

  //get data product form database
  const getData = useCallback(() => {
    const urlFirebase = `customers/${userState.uid}`;
    dispatch({type: 'LOADING'});
    app
      .database()
      .ref(urlFirebase)
      .on('value', (snap) => {
        if (snap) {
          const data = snap.val();
          if (data) {
            let temp = [];
            Object.keys(data).map((key) => {
              return temp.push(data[key]);
            });
            setPelanggan(temp);
            dispatch({type: 'DONE'});
          } else {
            setPelanggan(null);
            dispatch({type: 'DONE'});
          }
        }
      });
  }, [userState, dispatch]);

  useEffect(() => {
    // const getDAta
    getData();
  }, [getData]);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Pelanggan"
        header={HEADER_HEIGHT}
        back
        add={() => {
          setModalTambah(true);
          setMode('add');
          setDataToEdit(null);
        }}
      />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {paddingTop: HEADER_HEIGHT + 10},
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}>
        <Box bg={colors.white} padding={12}>
          {pelanggan &&
            pelanggan.map((p, i) => {
              return (
                <Pelanggan
                  data={p}
                  key={i}
                  onPress={(e) => {
                    setDataToEdit(e);
                    setModalTambah(true);
                    setMode('edit');
                  }}
                />
              );
            })}
        </Box>
      </ScrollView>
      <TambahPelanggan
        show={modalTambah}
        onclose={() => {
          setDataToEdit(null);
          setModalTambah(false);
        }}
        data={dataToEdit}
        mode={mode}
      />
    </View>
  );
};

export default ListPelanggan;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {elevation: 2, zIndex: 2000},
  container: {backgroundColor: colors.white, flex: 1},
});
