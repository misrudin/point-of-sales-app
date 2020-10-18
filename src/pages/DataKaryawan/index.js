import React, {useCallback, useState, useEffect} from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Box, Employees} from '../../components';
import {Header} from '../../templates';
import {colors} from '../../utils';
import app from '../../configs/index';
import {useSelector} from 'react-redux';

const HEADER_HEIGHT = 50 + StatusBar.currentHeight;

const DataKaryawan = ({navigation}) => {
  const userState = useSelector((state) => state.authState);
  const [employees, setEmployees] = useState(null);

  //get data product form database
  const getData = useCallback(() => {
    const urlFirebase = `employees/${userState.uid}`;

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
            setEmployees(temp);
          } else {
            setEmployees(null);
          }
        }
      });
  }, [userState]);

  useEffect(() => {
    // const getDAta
    getData();
  }, [getData]);

  const onPressItem = (item) => {
    navigation.navigate('AddKaryawan', {mode: 'edit', data: item});
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        text="Data Karyawan"
        header={HEADER_HEIGHT}
        back
        add={() => navigation.navigate('AddKaryawan', {mode: 'add'})}
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
          <Employees data={employees} onPress={(e) => onPressItem(e)} />
        </Box>
      </ScrollView>
    </View>
  );
};

export default DataKaryawan;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
  header: {elevation: 2, zIndex: 2000},
  container: {backgroundColor: colors.white, flex: 1},
});
