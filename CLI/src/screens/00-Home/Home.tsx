import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from '../../assets/icons/ArrowIcon.svg';
import {data} from '../../data';
import {RootStackParamList} from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const {width} = useWindowDimensions();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.cardContainer, {width: width * 0.95}]}>
            <Text style={styles.cardText}>React Native</Text>
            <Text style={styles.cardText}>Tutorial</Text>
          </View>
          {data.map((value, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.listContainer}
                onPress={() => {
                  const navigateTo: keyof RootStackParamList = value.navigate;
                  navigation.navigate(navigateTo);
                }}>
                <Text style={styles.listText}>{value.title}</Text>
                <ArrowIcon width={14} height={14} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#042f2e',
    aspectRatio: 16 / 5,
    marginTop: 10,
    borderRadius: 25,
  },
  cardText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listText: {color: 'black'},
});
