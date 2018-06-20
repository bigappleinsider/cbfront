import { RECEIVE_SEARCH, LOADING } from '../actions/searchActions';

const initialState = {
  data: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case RECEIVE_SEARCH:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
