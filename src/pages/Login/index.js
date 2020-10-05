import React from 'react';
import {StyleSheet, ScrollView, View, StatusBar} from 'react-native';
import {Box, Input, Label, Spacer, Container, Button} from '../../components';
import {colors, useForm, userHaveStore} from '../../utils';
import app from '../../configs';
import {useDispatch} from 'react-redux';

import {StayAtHome} from '../../assets';
import LottieView from 'lottie-react-native';

const LoginPage = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const _login = async () => {
    const {email, password} = form;
    dispatch({type: 'LOADING'});
    await app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const uid = res.user.uid;
        const userData = {
          uid,
          email: email,
        };
        userHaveStore(uid).then((store) => {
          if (store) {
            dispatch({type: 'STORE', store});
          }
          dispatch({type: 'LOGIN', userData: userData, uid: uid});
          dispatch({type: 'DONE'});
          setForm('reset');
        });
      })
      .catch((e) => {
        dispatch({type: 'DONE'});
        setForm('password', '');
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
              text="Masuk"
              color={colors.white}
              bg="#de4463"
              onPress={_login}
            />

            <Spacer h={20} />
            <Label text="Belum punya akun ?" color="#fff" center size={14} />
            <Spacer h={20} />

            <Button
              text="Daftar"
              color={colors.white}
              bg="#006a71"
              onPress={() => navigation.navigate('Register')}
            />
          </Container>
        </Box>
      </ScrollView>
    </View>
  );
};

export default LoginPage;

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
