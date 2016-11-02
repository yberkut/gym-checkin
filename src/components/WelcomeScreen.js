import React from 'react';
import { Text, View } from 'react-native';

const HelloScreen = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Welcome to Digital Check In application!</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  }
};

export default HelloScreen;
