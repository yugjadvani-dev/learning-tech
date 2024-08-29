import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface SlideProps {
  image: any;
  text: string;
}

const {width} = Dimensions.get('window');

const Slide: React.FC<SlideProps> = ({image, text}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Slide;
