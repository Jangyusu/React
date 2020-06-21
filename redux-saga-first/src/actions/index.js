export const CALL_DATA = 'CALL_DATA';
export const CALL_DATA_SUCCESS = 'CALL_DATA_SUCCESS';
export const CALL_DATA_FAIL = 'CALL_DATA_FAIL';

export const callData = () => {
  return {
    type: CALL_DATA,
  };
};

export const callDataSuccess = data => {
  return {
    type: CALL_DATA_SUCCESS,
    data,
  };
};

export const callDataFail = () => {
  return {
    type: CALL_DATA_FAIL,
  };
};
