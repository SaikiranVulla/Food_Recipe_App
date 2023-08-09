import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const CategoryCard = ({categoryItem, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={categoryItem.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          width: '68%',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}>
          {categoryItem.name}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
          {categoryItem.duration} | {categoryItem.serving} serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
