import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EmailLoginForm from './components/EmailLoginForm';
import CheckinForm from './components/CheckinForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="emailAuth" component={EmailLoginForm} title="Please Login" initial />
      </Scene>

      <Scene key="main">
        <Scene key="checkin" component={CheckinForm} title="Scan the QR-code" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
