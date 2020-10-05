import React from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Box, Spacer} from '../../components';
import {Header} from '../../templates';
import {colors} from '../../utils';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const Pengaturan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Pengaturan"
        header={HEADER_HEIGHT}
        bg={'#fff'}
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
          <Spacer h={10000} />
        </Box>
      </ScrollView>
    </View>
  );
};

export default Pengaturan;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {elevation: 2, zIndex: 2000},
  container: {backgroundColor: colors.white, flex: 1},
});
