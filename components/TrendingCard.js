import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const TrendingCard = ({containerStyle, recipeItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        height: 350,
        borderRadius: SIZES.radius,
        marginTop: SIZES.radius,
        marginLeft: 20,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={recipeItem.image}
        style={{
          width: 250,
          height: 350,
          borderRadius: SIZES.radius,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          backgroundColor: COLORS.transparentGray,
          paddingVertical: 5,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          {recipeItem.category}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 15,
          right: 15,
          backgroundColor: COLORS.transparentDarkGray,
          borderRadius: SIZES.radius,
          height: 100,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.base,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{width: '70%', flex: 1}}>
          <Text
            style={{
              width: '80%',
              ...FONTS.h3,
              color: COLORS.white,
              fontSize: 18,
            }}>
            {recipeItem.name}
          </Text>
          <Text style={{color: COLORS.gray, ...FONTS.body4, marginTop: 15}}>
            {recipeItem.duration} | {recipeItem.serving} serving
          </Text>
        </View>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.darkGreen,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({});
