import React from 'react';
import {SvgProps} from 'react-native-svg';

export interface OnboardingSlideProps {
  image: React.FC<SvgProps>;
  title: string;
  subtitle: string;
}
