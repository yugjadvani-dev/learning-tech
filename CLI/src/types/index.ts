export type RootStackParamList = {
  Home: undefined;
  OnboardingScreen: undefined;
  Iphone13OnboardingScreen: undefined;
};

export interface Data {
  navigate: keyof RootStackParamList;
  title: string;
}
