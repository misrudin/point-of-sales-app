import React from 'react';
import {StyleSheet, ScrollView, StatusBar, View, Text} from 'react-native';
import {Box, Spacer} from '../../components';
import {Header} from '../../templates';
import Animated from 'react-native-reanimated';
import {colors} from '../../utils';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;
const {diffClamp, interpolate} = Animated;

const Product = ({navigation}) => {
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
        <Header
          navigation={navigation}
          text="Product"
          header={HEADER_HEIGHT}
          back
        />
      </Animated.View>
      <ScrollView
        contentContainerStyle={[styles.scroll, {paddingTop: HEADER_HEIGHT}]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        bounces={false}>
        <Box padding={0}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: 150,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderBottomColor: '#eee',
              borderBottomWidth: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                borderWidth: 1,
                width: 130,
                height: '100%',
              }}></View>
            <View style={{flex: 1, marginLeft: 5}}>
              <Text>Sabun Cuci dari india</Text>
              <Text>Sabun Cuci dari india</Text>
              <Text>Sabun Cuci dari india</Text>
            </View>
          </View>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {elevation: 2, zIndex: 2000},
  container: {backgroundColor: colors.background, flex: 1},
});
