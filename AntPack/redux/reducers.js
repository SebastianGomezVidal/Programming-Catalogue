import {GET_EMPLOYEE_LIST} from './actions';

const initialState = {
  list: '',
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEE_LIST:
      return {...state, list: action.payload};
    default:
      return state;
  }
}

export default listReducer;
