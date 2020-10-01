import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Label, Spacer} from '../../components';

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Ripple
            style={styles.tabBarButton(index, state.routes, isFocused)}
            // accessibilityRole="button"
            // accessibilityStates={isFocused ? ['selected'] : []}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              solid
              size={18}
              name={
                label === 'Home' ? 'home' : label === 'Setting' ? 'cog' : 'user'
              }
              color={isFocused ? '#FF5C80' : '#A3C3FB'}
            />
            <Spacer h={2} />
            <Label
              text={label}
              color={isFocused ? '#FFA480' : '#A3C3FB'}
              size={10}
            />
          </Ripple>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // marginVertical: 10,
    // marginHorizontal: 20,
    // borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // position: 'absolute',
    // bottom: 0,
  },

  // tab bar button

  tabBarButton: (index, all, isFocused) => {
    return {
      paddingVertical: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: index !== all.length - 1 ? 10 : 0,
      borderRadius: 100,
      overflow: 'hidden',
      backgroundColor: isFocused ? '#efefef' : '#fff',
    };
  },
});
