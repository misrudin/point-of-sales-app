import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Box,
  Input,
  Label,
  Spacer,
  Container,
  Button,
  Row,
  SocialMedia,
  Divider,
} from '../../components';
import {colors} from '../../utils';

const RegisterStore = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <Box center>
        <Container>
          <Label text="Daftarkan Toko Kamu" center size={30} />
          <Spacer h={50} />

          <Label text="Data Toko" size={18} />
          <Spacer h={5} />

          <Label text="Jenis Usaha" size={14} />
          <Spacer h={5} />
          <Input placeholder="Jenis Usaha" icon="list" />

          <Spacer h={10} />

          <Label text="Nama Toko" size={14} />
          <Spacer h={5} />
          <Input placeholder="Nama Toko" icon="store" />

          <Spacer h={10} />

          <Label text="Telephone" size={14} />
          <Spacer h={5} />
          <Input placeholder="Telephone" phone icon="phone" />

          <Spacer h={10} />

          <Label text="Nama Pemilik" size={14} />
          <Spacer h={5} />
          <Input placeholder="Nama Pemilik" icon="user" />

          <Spacer h={20} />
          <Label text="Lokasi Toko" size={18} />
          <Spacer h={5} />
          <Label text="Provinsi" size={14} />
          <Spacer h={5} />
          <Input placeholder="Provinsi" icon="building" />

          <Spacer h={10} />
          <Label text="Kota" size={14} />
          <Spacer h={5} />
          <Input placeholder="Kota" icon="university" />

          <Spacer h={10} />
          <Label text="Alamat" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Alamat"
            icon="map-marker-alt"
            error="Invalid address..."
          />

          <Spacer h={40} />
          <Button
            text="Daftar"
            color={colors.white}
            bg="blue"
            onPress={() => navigation.navigate('MainMenu')}
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
