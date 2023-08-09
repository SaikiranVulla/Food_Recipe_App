import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const ViewerList = ({viewerList}) => {
  if (viewerList?.length === 0) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: COLORS.lightGray2, ...FONTS.body3}}>
          Be the First one to try the dishes
        </Text>
      </View>
    );
  } else if (viewerList?.length >= 0) {
    return (
      <View>
        {/* profilePic */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 5,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {viewerList?.map((item, index) => (
            <View
              key={index}
              style={{
                width: 50,
                height: 50,
                marginLeft: index == 0 ? 0 : -20,
              }}>
              <Image
                source={item.profilePic}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>
          ))}
        </View>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: 'right',
            lineHeight: 18,
            ...FONTS.body4,
          }}>
          {viewerList?.length} People
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: 'right',
            lineHeight: 18,
            ...FONTS.body4,
          }}>
          Already tried this!
        </Text>
      </View>
    );
  }
  return null;
};

export default ViewerList;

const styles = StyleSheet.create({});
