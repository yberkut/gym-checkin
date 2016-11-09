import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CUSTOMERS_FETCH,
  CUSTOMERS_FETCH_SUCCESS,
  CUSTOMER_FOUND,
  CUSTOMER_CREATE
} from './types';

export const customersFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: CUSTOMERS_FETCH });
    firebase.database().ref(`/users/${currentUser.uid}/customers`)
      .on('value', snapshot => {
        dispatch({ type: CUSTOMERS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const customerCreate = ({ firstName, lastName, phone }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers`)
      .push({ firstName, lastName, phone })
      .then(() => {
        dispatch({ type: CUSTOMER_CREATE });
      });
  };
};

export const customerFound = (customer) => {
  Actions.customerCard();
  return {
    type: CUSTOMER_FOUND,
    payload: customer
  };
};
