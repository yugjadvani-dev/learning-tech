import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {productList} from '../data/contacts';
import {ProductProps} from '../types/types';
import {color, fontFamily} from '../assets/styles/GlobalStyles';

const Item = ({name, weight, price, image}: ProductProps) => (
  <View style={styles.productCard}>
    <View style={styles.imageCard}>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.listHead}>
      <View>
        <Text style={styles.proPrice}>{name}</Text>
        <Text style={styles.proWeight}>{weight}</Text>
      </View>
      <Text style={styles.rp}>
        Rp.
        <Text style={styles.proPrice}>{price}</Text>
      </Text>
    </View>
  </View>
);

const BestPrice: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={productList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item {...item} />}
      />
    </View>
  );
};

export default BestPrice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
  },
  imageCard: {
    borderRadius: 15,
    backgroundColor: '#e8e8e8',
    padding: 15,
    marginBottom: 11,
    height: 120,
  },
  productCard: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#F0E9D2',
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 14,
    width: '47%',
    marginBottom: 15,
    marginRight: 20,
  },
  listHead: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  proWeight: {
    color: color.colorGray,
    fontFamily: fontFamily.montserrat,
    fontSize: 10,
    fontWeight: '400',
  },
  proPrice: {
    color: color.colorGray,
    fontFamily: fontFamily.montserrat,
    fontSize: 14,
    fontWeight: '900',
  },
  rp: {
    color: color.colorGray,
    fontFamily: fontFamily.montserrat,
    fontSize: 10,
    fontWeight: '400',
  },
});
