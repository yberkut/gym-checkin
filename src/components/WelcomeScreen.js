import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';

const HelloScreen = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Card>
        <CardSection>
          <Text style={textStyle}>Welcome to Digital Check In application!</Text>
        </CardSection>

        <CardSection>
          <Button>Login with email and password</Button>
        </CardSection>

        <CardSection>
          <Button>Login with QR-code scanning</Button>
        </CardSection>
      </Card>
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
