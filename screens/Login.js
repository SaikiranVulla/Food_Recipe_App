import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images, COLORS, SIZES, FONTS} from '../constants';
import {CustomButton} from '../components';

const Login = ({navigation}) => {
  function renderHeader() {
    return (
      <View style={{height: SIZES.height > 700 ? '65%' : '60%'}}>
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}
            colors={[COLORS.transparent, COLORS.black]}>
            <Text
              style={{
                color: COLORS.white,
                width: '80%',
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}>
              Cooking a delicious Food is Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  const renderDetails = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
        }}>
        <Text style={{color: COLORS.gray, width: '70%', ...FONTS.body3}}>
          Discover more than 1200 food recipes in your hands and cook it Easily
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{paddingVertical: 16, borderRadius: 20}}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace('Home')}
          />
          <CustomButton
            buttonText="SignUp"
            buttonContainerStyle={{
              paddingVertical: 16,
              borderRadius: 20,
              marginTop: 10,
              borderWidth: 1,
              borderColor: COLORS.darkGreen,
            }}
            colors={[]}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar barStyle="light-content" />
      {/* header */}
      {renderHeader()}
      {/* Details */}
      {renderDetails()}
    </View>
  );
};

export default Login;
