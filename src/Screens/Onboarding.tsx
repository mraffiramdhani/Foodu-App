import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  Text,
} from 'react-native';
import OnboardingSlide from '../Components/OnboardingSlide';

import SlideOne from '../Assets/Images/light_walkthrough_1.svg';
import SlideTwo from '../Assets/Images/light_walkthrough_2.svg';
import SlideThree from '../Assets/Images/light_walkthrough_3.svg';
import CommonButton from '../Components/CommonButton';
import {OnboardingScreenProps} from '../Types/Navigator';

const slideData = [
  {
    title: 'Order for Food',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A et aspernatur earum tenetur fuga voluptate totam consectetur tempore.',
  },
  {
    title: 'Easy Payment',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A et aspernatur earum tenetur fuga voluptate.',
  },
  {
    title: 'Fast Delivery',
    subtitle:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolor, sit amet consectetur adipisicing elit. Aspernatur, modi!',
  },
];

const {width} = Dimensions.get('window');
const Onboarding: OnboardingScreenProps = ({navigation}) => {
  const scrollRef = React.useRef<ScrollView>(null);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const navigateAuth = () =>
    navigation.navigate('AuthNavigator', {screen: 'AuthSelection'});

  const handleScrollPage = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));

  const handleScrollTo = (index: number) => () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: index * width,
        animated: true,
      });
    }
  };

  const DotComponent = ({active}: {active: boolean}) => {
    const dotAnim = new Animated.Value(0);

    React.useEffect(() => {
      if (active) {
        Animated.timing(dotAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(dotAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    }, [active]);

    return (
      <Animated.View
        style={{
          width: dotAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [6, 20],
          }),
          height: 6,
          borderRadius: 3,
          backgroundColor: active ? '#1bac4b' : '#dcdcdc',
          marginRight: 3,
        }}
      />
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
        }}>
        <ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          snapToAlignment="center"
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScrollPage}>
          <OnboardingSlide
            image={SlideOne}
            title={slideData[0].title}
            subtitle={slideData[0].subtitle}
          />
          <OnboardingSlide
            image={SlideTwo}
            title={slideData[1].title}
            subtitle={slideData[1].subtitle}
          />
          <OnboardingSlide
            image={SlideThree}
            title={slideData[2].title}
            subtitle={slideData[2].subtitle}
          />
        </ScrollView>
      </View>
      <View style={{paddingHorizontal: 24, marginBottom: 32}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 24,
          }}>
          {slideData.map((_, index) => (
            <DotComponent key={index} active={index === currentIndex} />
          ))}
        </View>
        <CommonButton
          onPress={
            currentIndex === slideData.length - 1
              ? navigateAuth
              : handleScrollTo(currentIndex + 1)
          }
          text={currentIndex === slideData.length - 1 ? 'Get Started' : 'Next'}
        />
      </View>
    </View>
  );
};

export default Onboarding;
