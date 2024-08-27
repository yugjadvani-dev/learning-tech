import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/00-Home/Home';
import OnboardingScreen from '../screens/01-React-Native-Onboarding-Screen/OnboardingScreen';

export type RootStackParamList = {
  Home: undefined;
  OnboardingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState<
    boolean | null
  >(null);
  console.log('isAppFirstLaunched', isAppFirstLaunched);

  React.useEffect(() => {
    const checkAppLaunchStatus = async () => {
      try {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData === null) {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem('isAppFirstLaunched', 'false');
        } else {
          setIsAppFirstLaunched(false);
        }
        // AsyncStorage.removeItem('isAppFirstLaunched');
      } catch (error) {
        console.error('Failed to fetch app launch status:', error);
      }
    };

    checkAppLaunchStatus();
  }, []);

  return (
    <>
      {isAppFirstLaunched != null && (
        <Stack.Navigator initialRouteName="Home">
          {/* First load screen */}
          {/* {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{
                headerShown: false,
              }}
            />
          )} */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default RootNavigator;
