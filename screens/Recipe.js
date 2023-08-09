import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Platform,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';
import { ViewerList } from '../components';

const HEADER_HEIGHT = 350;

const Recipe = ({navigation, route}) => {
  useEffect(() => {
    let {recipe} = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const scrollY = useRef(new Animated.Value(0)).current;

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function renderHeaderButton() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: COLORS.lightGreen,
            backgroundColor: COLORS.transparentBlack9,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={{width: 15, height: 15, tintColor: COLORS.lightGray}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 23,
            height: 20,
          }}>
          <Image
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{
              width: 23,
              height: 20,
              tintColor: COLORS.darkGreen,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecipeCardHeader() {
    return (
      <View
        style={{
          alignItems: 'center',
          overflow: 'hidden',
          marginTop: -1000,
          paddingTop: 1000,
        }}>
        <Animated.Image
          source={selectedRecipe?.image}
          style={{
            width: '100%',
            height: HEADER_HEIGHT,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scaleY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
          resizeMode="cover"
        />
        {/* Recipe Create Card */}
        {renderRecipeCardItem()}
      </View>
    );
  }

  function renderRecipeCardItem() {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 30,
          right: 30,
          height: 80,
        }}>
        <View
          style={{
            backgroundColor: COLORS.transparentDarkGray,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.base,
            flexDirection: 'row',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={selectedRecipe?.author.profilePic}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              Recipe by :
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {selectedRecipe?.author.name}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              marginRight: 20,
              width: 30,
              height: 30,
              borderWidth: 1,
              borderColor: COLORS.darkGreen,
              borderRadius: 4,
            }}>
            <Image
              source={icons.rightArrow}
              style={{width: 15, height: 15, tintColor: COLORS.darkGreen}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }

  function renderRecipeInfo() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: 20,
          height: 130,
        }}>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Text style={{...FONTS.h2}}>{selectedRecipe?.name}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
            {selectedRecipe?.duration} | {selectedRecipe?.serving} serving
          </Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
          <ViewerList viewerList={selectedRecipe?.viewers}/>
        </View>
      </View>
    );
  }

  function renderIngredientsInfo(){
    return(
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:30,marginBottom:10}}>
        <Text style={{...FONTS.h2,}}>Ingredients</Text>
        <Text style={{...FONTS.body3}}>{selectedRecipe?.ingredients.length} items </Text>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar barStyle="light-content" />
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Recipe Header Component */}
            {renderRecipeCardHeader()}
            {/* info */}
            {renderRecipeInfo()}
            {/* Ingredients Info */}
            {renderIngredientsInfo()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}>
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.body3}}>{item.description}</Text>
            </View>
            <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
              <Text style={{marginRight: 10, ...FONTS.body3}}>
                {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
      {/* headerBar */}
      {renderHeaderButton()}
    </View>
  );
};

export default Recipe;
