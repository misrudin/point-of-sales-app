import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Box, Input, Label, Spacer, Container, Button} from '../../components';
import {colors, storeData, useForm, userHaveStore} from '../../utils';
import app from '../../configs';
import {useDispatch} from 'react-redux';

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
          dispatch({type: 'LOADING'});
          setForm('reset');
        });
      })
      .catch((e) => {
        dispatch({type: 'LOADING'});
        setForm('password', '');
      });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <Box center>
        <Container>
          <Label text="DAGANG" center size={50} />
          <Spacer h={50} />

          <Label text="Email / Phone" size={14} />
          <Spacer h={5} />
          <Input
            placeholder="Email / Phone"
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
            text="Masuk"
            color={colors.white}
            bg="blue"
            onPress={_login}
          />

          <Spacer h={20} />
          <Label
            text="Belum punya akun ?"
            color={colors.dark1}
            center
            size={14}
          />
          <Spacer h={20} />

          <Button
            text="Daftar"
            color={colors.white}
            bg="green"
            onPress={() => navigation.navigate('Register')}
          />
        </Container>
      </Box>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  scroll: {minHeight: '100%'},
});
