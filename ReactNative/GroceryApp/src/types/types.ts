import {ImageSourcePropType} from 'react-native';

export interface CategoryListProps {
  id: string;
  image: ImageSourcePropType;
  name: string;
  bgColor: string;
  type: string;
}

export interface ProductProps {
  id: string;
  name: string;
  weight: string;
  price: string;
  image: ImageSourcePropType;
}
