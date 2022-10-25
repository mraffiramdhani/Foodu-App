import React from 'react';
import {View, Text} from 'react-native';
import {AuthSelectionProps} from '../../Types/Navigator';

import AuthIllust from '../../Assets/Images/auth_illust.svg';
import CommonButton from '../../Components/CommonButton';

const AuthSelection: AuthSelectionProps = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <AuthIllust height={200} />
      <Text
        style={{
          fontFamily: 'Figtree-Bold',
          fontSize: 48,
          color: 'black',
        }}>
        Let's you in
      </Text>
    </View>
  );
};

export default AuthSelection;
