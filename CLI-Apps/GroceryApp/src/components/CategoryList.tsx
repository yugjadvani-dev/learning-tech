import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categoryList} from '../data/contacts';
import {color, fontFamily} from '../assets/styles/GlobalStyles';
import {CategoryListProps} from '../types/types';

const Item: React.FC<CategoryListProps> = ({name, bgColor, image}) => (
  <>
    <View style={[styles.cardImg, {backgroundColor: bgColor}]}>
      <Image source={image} style={styles.image} />
    </View>
    <Text style={styles.text}>{name}</Text>
  </>
);

const CategoryList = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {categoryList.map(item => (
          <View style={styles.card}>
            <Item key={item.id} {...item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  image: {
    width: 44,
    height: 32,
  },
  card: {
    marginRight: 21,
    marginBottom: 16,
  },
  cardImg: {
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  text: {
    color: color.colorGray,
    fontFamily: fontFamily.montserrat,
    fontWeight: '400',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
  },
});
