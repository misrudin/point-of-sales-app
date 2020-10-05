import react from 'react';
import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors, fonts} from '../../../utils';

const InputComponent = ({
  value,
  onChange,
  error = null,
  icon = 'user',
  placeholder = 'Type a text here ...',
  password,
  email,
  phone,
}) => {
  return (
    <>
      <View style={[styles.inputGrup, styles.inputError(error)]}>
        <View style={styles.containerIcon}>
          <Icon
            name={icon}
            color={colors.secondary}
            size={18}
            style={styles.icon}
          />
        </View>
        <TextInput
          style={styles.inputText}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={password}
          keyboardType={email ? 'email-address' : phone ? 'numeric' : 'default'}
        />
      </View>
      {error && <Text style={styles.error}>{error && error}</Text>}
    </>
  );
};

export default React.memo(InputComponent);

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  inputText: {
    flex: 1,
    paddingVertical: 9,
    fontFamily: fonts.primary.normal,
    color: colors.dark1,
  },
  inputGrup: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 5,

    shadowColor: 'rgba(0,0,0,.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,

    elevation: 1,
  },

  error: {
    color: colors.error,
    fontSize: 12,
    fontFamily: fonts.secondary[400],
  },

  inputError: (error) => {
    return error
      ? {
          borderColor: colors.error,
          borderWidth: 1,
        }
      : {};
  },

  containerIcon: {
    width: 30,
    alignItems: 'center',
  },
});
