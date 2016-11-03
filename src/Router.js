import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WelcomeScreen from './components/WelcomeScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" component={WelcomeScreen} title="Welcome!" />
    </Router>
  );
};

export default RouterComponent;
