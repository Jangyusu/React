const INITIAL_STATE = {
  boards: [],
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case FETCH_BOARDS_FULFILLED:
      return {
        ...state,
        boards: payload,
      };
    case FETCH_BOARDS_REJECTED:
      return {
        ...state,
        showError: true,
        error,
      };
    default:
      return state;
  }
};
