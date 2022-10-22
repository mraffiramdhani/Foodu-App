import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './Navigators/utils';
import Main from './Navigators/Main';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Main />
    </NavigationContainer>
  );
}
