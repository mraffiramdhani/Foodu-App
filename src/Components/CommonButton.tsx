import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
} from 'react-native';
import {RequireAtLeastOne} from '../Types/utils';

interface CommonButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode | string;
  containerStyle?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const CommonButton: React.FC<
  RequireAtLeastOne<CommonButtonProps, 'children' | 'text'>
> = props => {
  return (
    <View style={props.containerStyle}>
      <Pressable
        onPress={props.onPress}
        style={[
          {
            backgroundColor: '#1bac4b',
            padding: 16,
            borderRadius: 100,
            alignItems: 'center',
          },
          props.buttonStyle,
        ]}>
        {React.isValidElement(props.children) ? (
          props.children
        ) : (
          <Text
            style={[
              {fontFamily: 'Figtree-Bold', fontSize: 14, color: 'white'},
              props.textStyle,
            ]}>
            {props.text}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default CommonButton;
