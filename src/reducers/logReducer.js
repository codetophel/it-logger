import { GET_LOGS, LOGS_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
  logs: null,
  error: null,
  current: null,
  loading: false,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default logReducer;