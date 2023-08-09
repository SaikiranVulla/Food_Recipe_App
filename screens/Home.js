import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, dummyData, FONTS, images, SIZES, icons} from '../constants';
import {CategoryCard, TrendingCard} from '../components';

const Home = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}>
            Hello, Sai Kiran
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            What you want to Cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          backgroundColor: COLORS.lightGray,
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          marginVertical: 12,
        }}>
        <TouchableOpacity onPress={() => console.log('search')}>
          <Image
            source={icons.search}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Search Recipes"
          placeholderTextColor={COLORS.gray}
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
        />
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGreen,
          flexDirection: 'row',
          padding: 10,
          height: 100,
          alignItems: 'center',
          borderRadius: SIZES.radius,
        }}>
        <Image
          source={images.recipe}
          style={{
            width: 90,
            height: 90,
          }}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{width: '60%', ...FONTS.body4}}>
            you have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity onPress={() => console.log('See Recipes')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: COLORS.darkGreen,
                textDecorationColor: COLORS.darkGreen,
                ...FONTS.h4,
                marginTop: 8,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Trending Recipe
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TrendingCard
                recipeItem={item}
                onPress={() => navigation.navigate('Recipe', {recipe: item})}
              />
            );
          }}
        />
      </View>
    );
  }

  function renderAllCategories() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{...FONTS.h2}}>Categories</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderHeader()}

            {/* searchBar */}
            {renderSearch()}

            {/* {See Recipe Card} */}
            {renderSeeRecipeCard()}

            {/* Trending Section */}
            {renderTrendingSection()}

            {/* All Categories */}
            {renderAllCategories()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}></View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
