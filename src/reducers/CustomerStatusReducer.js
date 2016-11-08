import {
  CUSTOMERS_FETCH,
  CUSTOMERS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  customersFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMERS_FETCH:
      return { ...state, customersFetching: true };
    case CUSTOMERS_FETCH_SUCCESS:
      return { ...state, customersFetching: false };
    default:
      return state;
  }
};
