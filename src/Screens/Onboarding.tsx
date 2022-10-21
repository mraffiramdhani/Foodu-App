import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import OnboardingSlide from '../Components/OnboardingSlide';

import SlideOne from '../Assets/Images/light_walkthrough_1.svg';
import SlideTwo from '../Assets/Images/light_walkthrough_2.svg';
import SlideThree from '../Assets/Images/light_walkthrough_3.svg';

const {width} = Dimensions.get('window');
const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleScrollPage = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));

  return (
    <View>
      <View style={{backgroundColor: 'white'}}>
        <ScrollView
          horizontal
          snapToInterval={width}
          snapToAlignment="center"
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScrollPage}>
          <OnboardingSlide image={SlideOne} />
          <OnboardingSlide image={SlideTwo} />
          <OnboardingSlide image={SlideThree} />
        </ScrollView>
      </View>
      <View style={{}}></View>
    </View>
  );
};

export default Onboarding;
