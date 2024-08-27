import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('window');

const Slide = ({item}: any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.text}</Text>
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
