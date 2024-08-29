import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import CustomButton from './src/components/CustomButton';
import Slide from './src/components/Slide';
import {slides} from './src/data';

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#282534', white: '#FFFFFF'};

const OnboardingScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{height: height * 0.75}}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        renderItem={({item}) => <Slide image={item.image} text={item.text} />}
      />
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: '#FFF',
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.footer}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <CustomButton
                title="GET STARTED"
                onPress={() => navigation.replace('Home')}
              />
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <CustomButton isTransprant={true} title="Skip" onPress={skip} />
              <View style={{width: 15}} />
              <CustomButton title="Next" onPress={goToNextSlide} />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginBottom: 20,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
});

export default OnboardingScreen;
