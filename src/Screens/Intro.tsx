import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IntroScreenProps} from '../Types/Navigator';

const Intro: IntroScreenProps = ({navigation}) => {
  const navigateOnboarding = () => navigation.navigate('OnboardingScreen');

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../Assets/Images/intro.jpg')}
        style={{height: '100%', width: '100%'}}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.8)']}
        style={[
          StyleSheet.absoluteFill,
          {
            paddingVertical: 32,
            paddingHorizontal: 24,
          },
        ]}>
        <TouchableOpacity
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={navigateOnboarding}
          style={{alignSelf: 'flex-end', marginTop: 12}}>
          <Text
            style={{
              fontFamily: 'Figtree-Black',
              fontSize: 16,
              color: '#32c161',
            }}>
            Next
          </Text>
        </TouchableOpacity>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text
            style={{
              color: '#32c161',
              fontFamily: 'Figtree-Bold',
              fontSize: 48,
            }}>
            Welcome to
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: '#32c161',
                fontFamily: 'Figtree-Bold',
                fontSize: 48,
              }}>
              Foodu!
            </Text>
            <Image
              source={require('../Assets/Images/waving-hand.png')}
              style={{height: 48, width: 48, marginLeft: 8}}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Figtree-Medium',
              fontSize: 16,
              color: 'white',
              textAlign: 'center',
              marginTop: 24,
            }}>
            Good Food, from carefully selected restaurant near you. Bring smiles
            to the table just within a few clicks.
          </Text>
        </View>
      </LinearGradient>
    </>
  );
};

export default Intro;
