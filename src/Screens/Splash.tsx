import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Layout} from '../Styles';
import {SplashScreenProps} from '../Types/Navigator';

import Logo from '../Assets/Images/logo.svg';
import {navigateAndSimpleReset} from '../Navigators/utils';

const Splash: SplashScreenProps = () => {
  React.useEffect(() => {
    setTimeout(() => {
      navigateAndSimpleReset('IntroScreen');
    }, 3000);
  }, []);

  return (
    <View
      style={[
        Layout.flex1,
        Layout.itemsCenter,
        Layout.justifyCenter,
        {backgroundColor: Colors.white},
      ]}>
      <View style={[Layout.flexRow, Layout.itemsCenter]}>
        <Logo />
        <Text
          style={{
            fontFamily: 'Figtree-Bold',
            fontSize: 48,
            color: 'black',
            marginLeft: 16,
          }}>
          Foodu
        </Text>
      </View>
    </View>
  );
};

export default Splash;
