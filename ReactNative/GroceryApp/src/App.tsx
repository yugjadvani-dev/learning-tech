import React from 'react';
// import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Chat from './screens/Chat';
import Profile from './screens/Profile';
import TabNavigator from './navigators/TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Define navigation param list
type RootStackParamList = {
  Tab: undefined;
  Category: undefined;
  Cart: undefined;
  Chat: undefined;
  Profile: undefined;
};

// Create stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    // <SafeAreaView>
    //   <StatusBar />
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default App;
