import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const TabIcon = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 50,
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: 30,
          width: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />
      {focused && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            backgroundColor: COLORS.darkGreen,
          }}></View>
      )}
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({});
