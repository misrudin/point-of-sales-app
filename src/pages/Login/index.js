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

const LoginPage = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <Box center>
        <Container>
          <Label text="DAGANG" center size={50} />
          <Spacer h={50} />

          <Label text="Email" size={14} />
          <Spacer h={5} />
          <Input placeholder="Email" email icon="envelope-square" />

          <Spacer h={15} />

          <Label text="Password" size={14} />
          <Spacer h={5} />
          <Input placeholder="Password" password icon="lock" />

          <Spacer h={40} />
          <Button text="Masuk" color={colors.white} bg="blue" />

          <Spacer h={40} />

          <Label
            text="Atau Masuk Dengan"
            color={colors.dark1}
            center
            size={14}
          />
          <Spacer h={20} />
          <Row>
            <SocialMedia icon="google" bg="green" color={colors.white} />
            <Spacer w={10} />
            <SocialMedia icon="facebook-f" bg="blue" color={colors.white} />
          </Row>
        </Container>
      </Box>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  scroll: {flex: 1},
});
