import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Input, Spacer} from '../atoms';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import app from '../../configs';
import {Box, ProductItems} from '../molechules';

const ModalComponent = ({show = false, onclose, onselect}) => {
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
    dispatch({type: 'ADD_TRANSACTION', data: item});
    onclose();
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      visible={show}
      onRequestClose={onclose}>
      <StatusBar
        animated
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0278ae"
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.modalHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => onclose()}>
            <Icon name="arrow-left" color={colors.white} size={18} />
          </TouchableOpacity>
        </View>
        <Spacer w={10} />
        <View style={styles.headerCenter}>
          <Input placeholder="Cari produk ..." icon="search" />
        </View>
        {/* <Spacer w={10} />
        <View style={styles.heaerRight}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => onclose()}>
            <Icon name="filter" color={colors.white} size={18} />
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.scroll]}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}>
          <Box bg={colors.white} padding={12}>
            <ProductItems
              search
              data={product}
              onPress={(item) => onPressItem(item)}
            />
          </Box>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modalHeader: {
    backgroundColor: '#0278ae',
    // height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },

  headerCenter: {
    flex: 1,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },

  scroll: {
    paddingBottom: 20,
    paddingTop: 10,
  },
});
