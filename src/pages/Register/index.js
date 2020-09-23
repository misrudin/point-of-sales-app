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
} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <Box center>
        <Container>
          <Label text="Daftar" center size={50} />
          <Spacer h={50} />

          <Label text="Nama" size={14} />
          <Spacer h={5} />
          <Input placeholder="Nama" icon="user" />

          <Spacer h={15} />

          <Label text="Telephone" size={14} />
          <Spacer h={5} />
          <Input placeholder="Telephone" phone icon="phone" />

          <Spacer h={15} />

          <Label text="Email" size={14} />
          <Spacer h={5} />
          <Input placeholder="Email" email icon="envelope-square" />

          <Spacer h={15} />

          <Label text="Password" size={14} />
          <Spacer h={5} />
          <Input placeholder="Password" password icon="lock" />

          <Spacer h={40} />
          <Button
            text="Daftar"
            color={colors.white}
            bg="blue"
            onPress={() => navigation.replace('RegisterStore')}
          />
          <Spacer h={10} />
          <Label
            text="Sudah punya akun ?"
            color={colors.dark1}
            center
            size={14}
          />
          <Spacer h={10} />
          <Button
            text="Masuk"
            color={colors.white}
            bg="green"
            onPress={() => navigation.goBack()}
          />
        </Container>
      </Box>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  scroll: {minHeight: '100%'},
});
