import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Box, ProductItems} from '../../components';
import {Header} from '../../templates';
import {colors} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import app from '../../configs';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const Product = ({navigation}) => {
  const userState = useSelector((state) => state.authState);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  //get data product form database
  const getData = useCallback(() => {
    const urlFirebase = `products/${userState.uid}`;
    dispatch({type: 'LOADING'});
    app
      .database()
      .ref(urlFirebase)
      .on('value', (snap) => {
        if (snap) {
          const data = snap.val();
          if (data) {
            let temp = [];
            Object.keys(data).map((key) => {
              return temp.push(data[key]);
            });
            setProduct(temp);
            dispatch({type: 'DONE'});
          } else {
            setProduct(null);
            dispatch({type: 'DONE'});
          }
        }
      });
  }, [userState, dispatch]);

  useEffect(() => {
    // const getDAta
    getData();
  }, [getData]);

  const onPressItem = (item) => {
    navigation.navigate('AddProduct', {mode: 'edit', data: item});
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Product"
        header={HEADER_HEIGHT}
        back
        add={() => navigation.navigate('AddProduct', {mode: 'add'})}
      />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {paddingTop: HEADER_HEIGHT + 10},
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}>
        <Box bg={colors.white} padding={12}>
          <ProductItems data={product} onPress={(item) => onPressItem(item)} />
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
  container: {backgroundColor: colors.white, flex: 1},
});
