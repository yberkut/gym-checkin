import React, { Component } from 'react';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC7Tu45I0-MlD4WYf1S_9JYRFCGYytdTDo',
      authDomain: 'maximus-32507.firebaseapp.com',
      databaseURL: 'https://maximus-32507.firebaseio.com',
      storageBucket: 'maximus-32507.appspot.com',
      messagingSenderId: '760906537001'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
