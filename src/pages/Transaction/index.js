import React from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import {Box, Label, Spacer, NewTransaction, Input} from '../../components';
import {colors} from '../../utils';
import {Header} from '../../templates';

const {width, height} = Dimensions.get('window');
const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const MainApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Transaksi"
        header={HEADER_HEIGHT}
        bg={'#fff'}
        add
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
        <Box bg={colors.white}>
          <Label
            text="Tanggal Dan Waktu"
            size={14}
            weight="bold"
            color="#fff"
          />
          <Spacer h={5} />
          <Input
            placeholder="Tanggal Dan Waktu"
            value={new Date()}
            icon="calendar"
          />

          <NewTransaction />
        </Box>
      </ScrollView>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {
    height: height / 3,
    width: width,
    backgroundColor: '#0278ae',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {backgroundColor: colors.white, flex: 1},
});
