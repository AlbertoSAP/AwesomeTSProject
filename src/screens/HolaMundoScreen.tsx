import React from 'react';
import {View, Text} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 50,
          textAlign: 'center',
        }}>
        Hello Word!!
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
