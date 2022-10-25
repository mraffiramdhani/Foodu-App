import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/Navigator';

import Splash from '../Screens/Splash';
import Intro from '../Screens/Intro';
import Onboarding from '../Screens/Onboarding';
import AuthNavigator from './Auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroScreen"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Main;
