import { CALL_DATA, CALL_DATA_SUCCESS, CALL_DATA_FAIL } from '../actions';
import { combineReducers } from 'redux';

const initState = {
  number: 0,
};

const data = (state = initState, action) => {
  switch (action.type) {
    case CALL_DATA:
      return { ...state };
    case CALL_DATA_SUCCESS:
      state.number = action.data['num'];
      return { ...state };
    case CALL_DATA_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

const App = combineReducers({
  data,
});

export default App;
