export const GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST';

export const getList = list => dispatch => {
  dispatch({
    type: GET_EMPLOYEE_LIST,
    payload: list,
  });
};
