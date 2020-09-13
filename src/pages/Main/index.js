import React from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Box, Label, Row, Spacer} from '../../components';
import {Header} from '../../templates';
import Animated from 'react-native-reanimated';
import {colors} from '../../utils';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;
const {diffClamp, interpolate} = Animated;

const MainApp = () => {
  const scrollY = new Animated.Value(0);
  const diffClampY = diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = interpolate(diffClampY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [{translateY: translateY}],
          },
          styles.header,
        ]}>
        <Header header={HEADER_HEIGHT} />
      </Animated.View>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {paddingTop: HEADER_HEIGHT + 10},
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        bounces={false}>
        <Box>
          <Spacer h={10000} />
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
  header: {elevation: 2, zIndex: 1000},
  container: {backgroundColor: colors.background, flex: 1},
});
