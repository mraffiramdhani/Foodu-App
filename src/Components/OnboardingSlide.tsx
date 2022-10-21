import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {OnboardingSlideProps} from '../Types/Onboarding';

const OnboardingSlide: React.FC<OnboardingSlideProps> = props => {
  const {image: ImageComponent} = props;
  const {width, height} = useWindowDimensions();

  return (
    <View style={{flex: 1}}>
      <ImageComponent width={width} height={height} />
    </View>
  );
};

export default OnboardingSlide;
