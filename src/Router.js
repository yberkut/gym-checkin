import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EmailLoginForm from './components/EmailLoginForm';
import LandingScreen from './components/LandingScreen';
import CheckInForm from './components/CheckInForm';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="emailAuth" component={EmailLoginForm} title="Please Login" initial />
      </Scene>

      <Scene key="main">
        <Scene key="landing" component={LandingScreen} title="Welcome back ;)" initial />
        <Scene key="checkIn" component={CheckInForm} title="Scan the QR-code" />
        <Scene key="customers" component={CustomerList} title="Customers" />
        <Scene key="customer" component={CustomerForm} title="Customer" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
