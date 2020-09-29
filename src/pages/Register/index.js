import React from 'react';
import {StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import {Box, Input, Label, Spacer, Container, Button} from '../../components';
import {colors, useForm} from '../../utils';
import app from '../../configs';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const _onRegister = () => {
    dispatch({type: 'LOADING'});
    app
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((response) => {
        setForm('reset');
        const uid = response.user.uid;
        const data = {
          name: form.name,
          phone: form.phone,
          email: form.email,
          uid: uid,
          store: false,
        };
        const userData = {
          email: form.email,
          uid,
        };

        dispatch({type: 'REGISTER', userData: userData, uid: uid});
        _saveToDatabse(data, uid);
      })
      .catch((e) => {
        dispatch({type: 'LOADING'});
      });
  };

  const _saveToDatabse = (data, uid) => {
    const urlUser = `users/${uid}`;
    app
      .database()
      .ref(urlUser)
      .set(data)
      .then(() => {
        dispatch({type: 'LOADING'});
        sendEmail();
        navigation.replace('RegisterStore');
      })
      .catch(() => {
        dispatch({type: 'LOADING'});
      });
  };

  const sendEmail = () => {
    const user = app.auth().currentUser;
    user
      .sendEmailVerification()
      .then(function () {
        ToastAndroid.show(
          'Silahkan cek email untuk Verifikasi',
          ToastAndroid.SHORT,
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <Input
            placeholder="Nama"
            value={form.name}
            onChange={(e) => setForm('name', e)}
            icon="user"
          />

          <Spacer h={15} />

          <Label text="Telephone" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Telephone"
            value={form.phone}
            onChange={(e) => setForm('phone', e)}
            phone
            icon="phone"
          />

          <Spacer h={15} />

          <Label text="Email" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm('email', e)}
            email
            icon="envelope-square"
          />

          <Spacer h={15} />

          <Label text="Password" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm('password', e)}
            password
            icon="lock"
          />

          <Spacer h={40} />
          <Button
            text="Daftar"
            color={colors.white}
            bg="blue"
            onPress={_onRegister}
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
