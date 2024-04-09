import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Platform} from 'react-native';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Category from '../screens/Category';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const tabBarIcons = {
  Home: ({focused}: {focused: boolean}) => (
    <View style={focused ? styles.iconBg : null}>
      <FontAwesome5
        name="home"
        size={20}
        color={focused ? '#EEBB4D' : '#9e988a'}
      />
      {focused && <View style={styles.dots} />}
    </View>
  ),
  Cart: ({focused}: {focused: boolean}) => (
    <View style={focused ? styles.iconBg : null}>
      <FontAwesome5
        name="shopping-cart"
        size={20}
        color={focused ? '#EEBB4D' : '#9e988a'}
      />
      {focused && <View style={styles.dots} />}
    </View>
  ),
  Category: ({focused}: {focused: boolean}) => (
    <View style={focused ? styles.iconBg : null}>
      <Ionicons name="grid" size={20} color={focused ? '#EEBB4D' : '#9e988a'} />
      {focused && <View style={styles.dots} />}
    </View>
  ),
  Chat: ({focused}: {focused: boolean}) => (
    <View style={focused ? styles.iconBg : null}>
      <Feather
        name="message-circle"
        size={20}
        color={focused ? '#EEBB4D' : '#9e988a'}
      />
      {focused && <View style={styles.dots} />}
    </View>
  ),
  Profile: ({focused}: {focused: boolean}) => (
    <View style={focused ? styles.iconBg : null}>
      <MaterialCommunityIcons
        name="account"
        size={20}
        color={focused ? '#EEBB4D' : '#9e988a'}
      />
      {focused && <View style={styles.dots} />}
    </View>
  ),
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: tabBarIcons.Home}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{tabBarIcon: tabBarIcons.Cart}}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{tabBarIcon: tabBarIcons.Category}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{tabBarIcon: tabBarIcons.Chat}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarIcon: tabBarIcons.Profile}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: '#e2e2e2',
        shadowOffset: {width: 0, height: -5},
        shadowOpacity: 0.5,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  iconBg: {
    height: 40,
    paddingHorizontal: 7,
    paddingVertical: 10,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#F9F3D0',
  },
  dots: {
    height: 4,
    width: 4,
    backgroundColor: '#EEBB4D',
    borderRadius: 50,
    marginTop: 4,
  },
});

export default TabNavigator;
