import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Search from '../components/Search';
import {color, fontFamily} from '../assets/styles/GlobalStyles';
import {categoryList} from '../data/contacts';
import {CategoryListProps} from '../types/types';

const categoryTypes: string[] = [
  'All Category',
  'Popular',
  'Best Price',
  'Best Deal',
  'Package',
];

const Item = ({name, image, bgColor}: CategoryListProps) => (
  <View style={[{backgroundColor: bgColor}, styles.productCard]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.proName}>{name}</Text>
  </View>
);

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>('All Category');

  const filteredCategoryList = categoryList.filter(
    item =>
      selectedCategory === 'All Category' || item.type === selectedCategory,
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollViewFlex}>
        <Search />

        <ScrollView horizontal={true}>
          {categoryTypes.map(item => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelectedCategory(item)}>
              <View style={styles.wrapper}>
                <Text
                  style={[
                    styles.category,
                    item === selectedCategory && styles.active,
                  ]}>
                  {item}
                </Text>
                {item === selectedCategory && (
                  <View style={styles.activeDots} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.cardContainer}>
          <FlatList
            numColumns={2}
            data={filteredCategoryList}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item {...item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollViewFlex: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: color.colorWhite,
    flex: 1,
    padding: 15,
  },
  cardContainer: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
  category: {
    color: '#D9D8D3',
    fontFamily: fontFamily.montserrat,
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 13,
    marginBottom: 2,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: '#3D3014',
  },
  activeDots: {
    width: 8,
    height: 4,
    backgroundColor: '#EEBB4D',
    borderRadius: 5,
  },
  productCard: {
    padding: 16,
    borderRadius: 20,
    width: '47%',
    marginRight: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 12,
  },
  proName: {
    color: '#3D3014',
    fontFamily: fontFamily.montserrat,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Category;
