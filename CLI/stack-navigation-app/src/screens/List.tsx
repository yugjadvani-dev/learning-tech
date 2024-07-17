import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ListProps = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({navigation}: ListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>List Screen</Text>
      <Button
        title="Go to details"
        // onPress={() =>
        //   navigation.navigate('Details', {
        //     productId: '86',
        //   })
        // }

        // onPress={() => navigation.navigate('Details')}

        onPress={() =>
          navigation.push('Details', {
            productId: '86',
          })
        }
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
