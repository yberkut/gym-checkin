import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CustomerReducer from './CustomerReducer';
import CustomerFormReducer from './CustomerFormReducer';
import CustomerStatusReducer from './CustomerStatusReducer';

export default combineReducers({
  auth: AuthReducer,
  customers: CustomerReducer,
  customerForm: CustomerFormReducer,
  customerStatus: CustomerStatusReducer
});
