import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isTransprant?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isTransprant,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.btn,
        {
          backgroundColor: isTransprant ? 'transparent' : '#FFF',
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: isTransprant ? '#FFF' : '#333',
          textShadowColor: isTransprant ? '#333' : '#FFF',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
});

export default CustomButton;
