import React from 'react';
import {View, Text, StyleProp, ViewStyle, Pressable} from 'react-native';

interface CommonButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = props => {
  return (
    <View style={props.containerStyle}>
      <Pressable
        onPress={props.onPress}
        style={{
          backgroundColor: '#1bac4b',
          padding: 16,
          borderRadius: 100,
          alignItems: 'center',
        }}>
        <Text
          style={{fontFamily: 'Figtree-Bold', fontSize: 14, color: 'white'}}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

export default CommonButton;
