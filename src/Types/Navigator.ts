import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  IntroScreen: undefined;
  OnboardingScreen: undefined;
};

export type SplashScreenProps = React.FC<
  NativeStackScreenProps<RootStackParamList, 'SplashScreen'>
>;
export type IntroScreenProps = React.FC<
  NativeStackScreenProps<RootStackParamList, 'IntroScreen'>
>;
export type OnboardingScreenProps = React.FC<
  NativeStackScreenProps<RootStackParamList, 'OnboardingScreen'>
>;
