import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {OnboardingSlideProps} from '../Types/Onboarding';

const OnboardingSlide: React.FC<OnboardingSlideProps> = props => {
  const {image: ImageComponent} = props;
  const {width} = useWindowDimensions();

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <ImageComponent width={width} />
      <View style={{paddingHorizontal: 24, width, marginTop: 8}}>
        <Text
          style={{
            color: '#32c161',
            fontFamily: 'Figtree-Bold',
            fontSize: 48,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            fontFamily: 'Figtree-Medium',
            fontSize: 16,
            color: 'black',
            textAlign: 'center',
            marginTop: 16,
          }}>
          {props.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;
