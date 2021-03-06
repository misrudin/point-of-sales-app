import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ToastAndroid,
  View,
  StatusBar,
} from 'react-native';
import {Box, Input, Label, Spacer, Container, Button} from '../../components';
import {colors, useForm} from '../../utils';
import app from '../../configs';
import {useDispatch} from 'react-redux';

import {StayAtHome} from '../../assets';
import LottieView from 'lottie-react-native';

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
        dispatch({type: 'DONE'});
        sendEmail();
        // navigation.replace('RegisterStore');
      })
      .catch(() => {
        dispatch({type: 'DONE'});
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
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Box bg="rgb(18,134,255)" center>
          <Container>
            <View style={{height: 150}}>
              <LottieView source={StayAtHome} autoPlay loop />
            </View>
            <Spacer h={20} />

            <Label text="Nama" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Nama"
              value={form.name}
              onChange={(e) => setForm('name', e)}
              icon="user"
            />

            <Spacer h={15} />

            <Label text="Telephone" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Telephone"
              value={form.phone}
              onChange={(e) => setForm('phone', e)}
              phone
              icon="phone"
            />

            <Spacer h={15} />

            <Label text="Email" size={14} weight="bold" color="#fff" />
            <Spacer h={5} />
            <Input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm('email', e)}
              email
              icon="envelope-square"
            />

            <Spacer h={15} />

            <Label text="Password" size={14} weight="bold" color="#fff" />
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
              bg="#de4463"
              onPress={_onRegister}
            />
            <Spacer h={20} />
            <Label text="Sudah punya akun ?" color="#fff" center size={14} />
            <Spacer h={20} />
            <Button
              text="Masuk"
              color={colors.white}
              bg="#006a71"
              onPress={() => navigation.goBack()}
            />
          </Container>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  scroll: {
    paddingTop: StatusBar.currentHeight + 50,
    backgroundColor: 'rgb(18,134,255)',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(18,134,255)',
  },
});
