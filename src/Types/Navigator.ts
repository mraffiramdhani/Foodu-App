import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  SplashScreen: undefined;
  IntroScreen: undefined;
  OnboardingScreen: undefined;
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
};

export type AuthStackParamList = {
  AuthSelection: undefined;
};

// RootStackScreens
export type SplashScreenProps = React.FC<
  NativeStackScreenProps<RootStackParamList, 'SplashScreen'>
>;
export type IntroScreenProps = React.FC<
  NativeStackScreenProps<RootStackParamList, 'IntroScreen'>
>;
export type OnboardingScreenProps = React.FC<
  NativeStackScreenProps<RootStackParamList, 'OnboardingScreen'>
>;

// AuthStackScreens
export type AuthSelectionProps = React.FC<
  NativeStackScreenProps<AuthStackParamList, 'AuthSelection'>
>;
