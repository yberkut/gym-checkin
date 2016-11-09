import {
  CUSTOMER_FOUND
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  phone: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_FOUND:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
