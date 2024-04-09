import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search: React.FC = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.searchContainerStyle}>
        <Icon name="search" size={16} color="#573B004D" />
        <TextInput style={styles.searchFiled} placeholder="Search" />
      </View>
      <View style={[styles.notificationIcon, styles.notificationIconBg]}>
        <Icon name="filter" size={16} color="#EEBB4D" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
  },
  searchContainerStyle: {
    backgroundColor: '#fdfdf9',
    borderRadius: 15,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    width: '85%',
    borderColor: '#F0E9D2',
    borderWidth: 1,
  },
  searchFiled: {
    paddingLeft: 17,
  },
  notificationIcon: {
    borderRadius: 15,
    borderColor: '#F9F3D0',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  notificationIconBg: {
    backgroundColor: '#fcf9e8',
  },
});

export default Search;
