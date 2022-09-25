import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Layout} from '../Styles';

import Logo from '../Assets/Images/logo.svg';

export default function Splash() {
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
        <Text>Foodu</Text>
      </View>
    </View>
  );
}
