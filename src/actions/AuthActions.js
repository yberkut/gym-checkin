import { Actions } from 'react-native-router-flux';
import { AuthService, UserService } from '../services';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  AUTHORIZE_USER_SUCCESS,
  AUTHORIZE_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    AuthService.signIn(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        AuthService.createUser(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS });
  authorizeUser(dispatch, user);
};

const authorizeUser = (dispatch, user) => {
  AuthService.isAdmin(user.uid)
    .then(snapshot => {
      if (snapshot.val()) {
        authorizeUserSuccess(dispatch, user);
      } else {
        authorizeUserFail(dispatch, user);
      }
    });
};

const authorizeUserSuccess = (dispatch, user) => {
  UserService.getUser(user.uid)
    .then(snapshot => {
      dispatch({
        type: AUTHORIZE_USER_SUCCESS,
        payload: snapshot.val()
      });
      Actions.main();
    });
};

const authorizeUserFail = (dispatch, user) => {
  dispatch({
    type: AUTHORIZE_USER_FAIL,
    payload: user
  });
};
